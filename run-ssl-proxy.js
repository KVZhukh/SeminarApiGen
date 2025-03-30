const { execSync } = require('child_process');

const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, port, hostname });
const handle = app.getRequestHandler();

// Function to check if a command is available
function isCommandAvailable(command) {
    try {
        execSync(`command -v ${command}`);
        return true;
    } catch (error) {
        return false;
    }
}

// Function to check if mkcert is installed
function isMkcertInstalled() {
    try {
        execSync('command -v mkcert');
        return true;
    } catch (error) {
        return false;
    }
}

// Function to install mkcert based on the package manager available
function installMkcert() {
    if (isMkcertInstalled()) return;

    console.log('Installing mkcert...');

    if (isCommandAvailable('brew')) {
        execSync('brew install mkcert'); // Install using Homebrew on macOS
        return;
    }

    if (isCommandAvailable('apt')) {
        execSync('sudo apt update');
        execSync('sudo apt install -y mkcert'); // Install using apt on Unix-based systems
        return;
    }

    throw new Error('Unable to find a suitable package manager to install mkcert.');
}

function generateKeyFiles() {
    if (!fs.existsSync('./ssl-proxy/localhost.pem')) {
        fs.mkdirSync('./ssl-proxy', {
            recursive: true,
        });

        console.log('Generating key files using mkcert...');
        execSync(`mkcert -install`);
        execSync(`mkcert -key-file ./ssl-proxy/localhost.key -cert-file ./ssl-proxy/localhost.pem localhost`);
    }
}

async function main() {
    installMkcert();
    generateKeyFiles();

    await app.prepare();

    const httpsOptions = {
        key: fs.readFileSync('./ssl-proxy/localhost.key'),
        cert: fs.readFileSync('./ssl-proxy/localhost.pem'),
    };

    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, err => {
        if (err) throw err;
        console.log(`[run-ssl-proxy] started server on url: https://localhost:${port}`);
    });
}

main().catch(console.error);
