(function (t) {
    function e(e) {
        for (var n, a, c = e[0], r = e[1], l = e[2], d = 0, m = []; d < c.length; d++)
            (a = c[d]), Object.prototype.hasOwnProperty.call(s, a) && s[a] && m.push(s[a][0]), (s[a] = 0);
        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        p && p(e);
        while (m.length) m.shift()();
        return i.push.apply(i, l || []), o();
    }
    function o() {
        for (var t, e = 0; e < i.length; e++) {
            for (var o = i[e], n = !0, c = 1; c < o.length; c++) {
                var r = o[c];
                0 !== s[r] && (n = !1);
            }
            n && (i.splice(e--, 1), (t = a((a.s = o[0]))));
        }
        return t;
    }
    var n = {},
        s = { app: 0 },
        i = [];
    function a(e) {
        if (n[e]) return n[e].exports;
        var o = (n[e] = { i: e, l: !1, exports: {} });
        return t[e].call(o.exports, o, o.exports, a), (o.l = !0), o.exports;
    }
    (a.m = t),
        (a.c = n),
        (a.d = function (t, e, o) {
            a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
        }),
        (a.r = function (t) {
            'undefined' !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (a.t = function (t, e) {
            if ((1 & e && (t = a(t)), 8 & e)) return t;
            if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (
                (a.r(o),
                Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
                2 & e && 'string' != typeof t)
            )
                for (var n in t)
                    a.d(
                        o,
                        n,
                        function (e) {
                            return t[e];
                        }.bind(null, n)
                    );
            return o;
        }),
        (a.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t['default'];
                      }
                    : function () {
                          return t;
                      };
            return a.d(e, 'a', e), e;
        }),
        (a.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (a.p = '/');
    var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
        r = c.push.bind(c);
    (c.push = e), (c = c.slice());
    for (var l = 0; l < c.length; l++) e(c[l]);
    var p = r;
    i.push([0, 'chunk-vendors']), o();
})({
    0: function (t, e, o) {
        t.exports = o('56d7');
    },
    '0147': function (t, e, o) {
        'use strict';
        o('f3a5');
    },
    '03d1': function (t, e, o) {
        'use strict';
        o('0fee');
    },
    '0fee': function (t, e, o) {},
    '4c1d': function (t, e, o) {},
    '4e17': function (t, e, o) {},
    '53f0': function (t, e, o) {},
    '56d7': function (t, e, o) {
        'use strict';
        o.r(e);
        o('cadf'), o('551c'), o('f751'), o('097d');
        var n = o('2b0e'),
            s = o('2f62');
        n['a'].use(s['a']);
        var i = new s['a'].Store({
                state: { isConnectedToServer: !1 },
                mutations: {
                    set_isConnectedToServer: function (t, e) {
                        t.isConnectedToServer = e;
                    },
                },
            }),
            a = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    'div',
                    {
                        directives: [
                            {
                                name: 'show',
                                rawName: 'v-show',
                                value: t.isWidgetVisible,
                                expression: 'isWidgetVisible',
                            },
                        ],
                        attrs: { id: 'bpmsoftoccchat' },
                    },
                    [
                        o(
                            'div',
                            {
                                directives: [
                                    { name: 'show', rawName: 'v-show', value: t.isVisible, expression: 'isVisible' },
                                ],
                                attrs: { id: 'bpmsoftoccchat-container-body' },
                            },
                            [
                                o('div', { attrs: { id: 'bpmsoftoccchat-container' } }, [
                                    o(
                                        'div',
                                        { staticClass: 'bpmsoftoccchat-messenger', attrs: { 'data-reactroot': '' } },
                                        [
                                            o('div', { staticClass: 'bpmsoftoccchat-messenger-background' }),
                                            o('span', [
                                                o(
                                                    'div',
                                                    { staticClass: 'bpmsoftoccchat-conversation' },
                                                    [
                                                        o('bpmsoftoccchat-header'),
                                                        o('bpmsoftoccchat-body', {
                                                            attrs: {
                                                                messages: t.visibleMessages,
                                                                'channel-panel-mode': t.channelPanelModeOn,
                                                            },
                                                        }),
                                                        o('bpmsoftoccchat-footer', {
                                                            attrs: {
                                                                onsendclick: t.onSendClick,
                                                                clienttyping: t.clientTyping,
                                                                onemojisend: t.onEmojiSend,
                                                                onfileuploaded: t.onFileUploaded,
                                                                'is-disabled':
                                                                    t.lastMessageContainsButtons &&
                                                                    t.disableInputOnButtonMessages,
                                                                'hide-textbox': t.channelPanelModeOn,
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                            ]),
                                        ]
                                    ),
                                ]),
                            ]
                        ),
                        o('bpmsoftoccchat-widget-button', {
                            directives: [
                                { name: 'show', rawName: 'v-show', value: !t.isVisible, expression: '!isVisible' },
                            ],
                        }),
                    ],
                    1
                );
            },
            c = [],
            r =
                (o('6762'),
                o('2fdb'),
                o('b54a'),
                o('7f7f'),
                o('a481'),
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o('div', { staticClass: 'bpmsoftoccchat-header-buttons' }, [
                        !this.$parent.channelPanelModeOn && this.showChannelPanel
                            ? o(
                                  'div',
                                  {
                                      staticClass:
                                          'bpmsoftoccchat-header-buttons-close bpmsoftoccchat-header-buttons-print',
                                      attrs: { title: t.backToChannelChooseCaption },
                                  },
                                  [
                                      o('img', {
                                          staticClass: 'bpmsoftoccchat-header-buttons-close-contents',
                                          attrs: { src: t.menuButtonIcon, id: 'bpmsoftoccchat-printbutton' },
                                          on: { click: t.showChannels },
                                      }),
                                  ]
                              )
                            : t._e(),
                        this.withoutStartButton
                            ? t._e()
                            : o(
                                  'div',
                                  {
                                      staticClass: 'bpmsoftoccchat-header-buttons-close',
                                      attrs: { title: t.closeChatCaption },
                                  },
                                  [
                                      o('div', {
                                          staticClass: 'bpmsoftoccchat-header-buttons-close-contents',
                                          attrs: { id: 'bpmsoftoccchat-closebutton' },
                                          on: { click: t.hide },
                                      }),
                                  ]
                              ),
                    ]);
                }),
            l = [],
            p = {
                data: function () {
                    var t = {
                        connectorUrl:
                            window.bpmsoftoccconfig.connectorUrl || 'https://bpmsoft-oc-connector1.cloudbpm.ru',
                        srcUrl: window.bpmsoftoccconfig.srcUrl || 'https://bpmsoft-oc-widget1.cloudbpm.ru/src',
                        fileServerUrl:
                            window.bpmsoftoccconfig.fileServerUrl || 'https://bpmsoft-oc-fileservice1.cloudbpm.ru',
                        channelId: window.bpmsoftoccconfig.channelId || '',
                        title: window.bpmsoftoccconfig.title || '',
                        subtitle: window.bpmsoftoccconfig.subtitle || '',
                        footerTitle: window.bpmsoftoccconfig.footerTitle || '',
                        footerTitleName: window.bpmsoftoccconfig.footerTitleName || '',
                        footerLink: window.bpmsoftoccconfig.footerLink || '',
                        chatMessagePlaceholder:
                            window.bpmsoftoccconfig.chatMessagePlaceholder || 'Введите сообщение...',
                        chatButtonsPlaceholder:
                            window.bpmsoftoccconfig.chatButtonsPlaceholder ||
                            'Пожалуйста, выберите один из следующих вариантов',
                        fileLoadingPlaceholder: window.bpmsoftoccconfig.fileLoadingPlaceholder || 'Загрузка файла...',
                        closeChatCaption: window.bpmsoftoccconfig.closeChatCaption || 'Свернуть',
                        saveFeedCaption: window.bpmsoftoccconfig.saveFeedCaption || 'Сохранить историю сообщений',
                        pdhHeaderCaption:
                            window.bpmsoftoccconfig.pdhHeaderCaption || 'Обмен сообщениями с историей оператора',
                        pdfOperatorSignCaption: window.bpmsoftoccconfig.pdfOperatorSignCaption || 'Фраза оператора',
                        pdfClientSignCaption: window.bpmsoftoccconfig.pdfClientSignCaption || 'Моя фраза',
                        LifeTime: window.bpmsoftoccconfig.localStorageLifeTime || 30,
                        clientId: String(window.bpmsoftoccconfig.clientId) || '',
                        disableInputOnButtonMessages:
                            void 0 == window.bpmsoftoccconfig.disableInputOnButtonMessages ||
                            window.bpmsoftoccconfig.disableInputOnButtonMessages,
                        sendInitialMessageOnWidgetButtonClick:
                            void 0 == window.bpmsoftoccconfig.sendInitialMessageOnWidgetButtonClick ||
                            window.bpmsoftoccconfig.sendInitialMessageOnWidgetButtonClick,
                        initialMessageText: window.bpmsoftoccconfig.initialMessageText || 'Клиент открыл веб-чат',
                        welcomeMessage: window.bpmsoftoccconfig.welcomeMessage || null,
                        timeFormatFuntion:
                            window.bpmsoftoccconfig.timeFormatFuntion ||
                            function (t) {
                                var e = new Date(t);
                                return ''
                                    .concat(e.getHours(), ':')
                                    .concat(e.getMinutes() < 10 ? '0' + e.getMinutes() : e.getMinutes());
                            },
                        showChannelPanel:
                            void 0 != window.bpmsoftoccconfig.showChannelPanel &&
                            window.bpmsoftoccconfig.showChannelPanel,
                        channelPanelHeader:
                            window.bpmsoftoccconfig.channelPanelHeader || 'Выберите канал для продолжения общения ',
                        channelsInPanel: window.bpmsoftoccconfig.channelsInPanel || null,
                        enableFileUpload:
                            void 0 == window.bpmsoftoccconfig.enableFileUpload ||
                            window.bpmsoftoccconfig.enableFileUpload,
                        backToChannelChooseCaption:
                            window.bpmsoftoccconfig.backToChannelChooseCaption || 'Вернуться к списку каналов',
                        errorFileUploadString: window.bpmsoftoccconfig.errorFileUploadString || 'Ошибка',
                        successFileUploadString: window.bpmsoftoccconfig.successFileUploadString || 'Загружен',
                        widgetButtonColor: window.bpmsoftoccconfig.widgetButtonColor || '#FFCB02',
                        widgetButtonColorLine: window.bpmsoftoccconfig.widgetButtonColorLine || '#130658',
                        isClientTyping: window.bpmsoftoccconfig.isClientTyping || !1,
                        startButtonSvg: window.bpmsoftoccconfig.startButtonSvg || null,
                        isEmojiVisible: window.bpmsoftoccconfig.isEmojiVisible || !1,
                        operatorInfoMessage: window.bpmsoftoccconfig.operatorInfoMessage || 'Ваш оператор {0}',
                        isWidgetVisible: void 0 == window.bpmsoftoccconfig.visible || window.bpmsoftoccconfig.visible,
                        canOperatorInitializeChat:
                            void 0 != window.bpmsoftoccconfig.canOperatorInitializeChat &&
                            window.bpmsoftoccconfig.canOperatorInitializeChat,
                        cookieSessionTime: window.bpmsoftoccconfig.cookieSessionTime || 3e6,
                        showOperatorNameUnderAvatar:
                            void 0 != window.bpmsoftoccconfig.showOperatorNameUnderAvatar &&
                            window.bpmsoftoccconfig.showOperatorNameUnderAvatar,
                        connectWssWithoutClick:
                            void 0 != window.bpmsoftoccconfig.connectWssWithoutClick &&
                            window.bpmsoftoccconfig.connectWssWithoutClick,
                        withoutStartButton:
                            void 0 != window.bpmsoftoccconfig.withoutStartButton &&
                            window.bpmsoftoccconfig.withoutStartButton,
                        noMessagesHistoryCaption:
                            window.bpmsoftoccconfig.noMessagesHistoryCaption || 'No messages history',
                        yourOperatorCaption: window.bpmsoftoccconfig.yourOperatorCaption || 'Your operator',
                    };
                    return (
                        (t.bpmsoftoccDownloadIcon =
                            window.bpmsoftoccconfig.bpmsoftoccDownloadIcon || ''.concat(t.srcUrl, '/n-download.svg')),
                        (t.bpmsoftoccDownloadClientIcon =
                            window.bpmsoftoccconfig.bpmsoftoccDownloadClientIcon ||
                            ''.concat(t.srcUrl, '/n-downloadClient.svg')),
                        (t.operatorAvatar =
                            window.bpmsoftoccconfig.operatorAvatar || ''.concat(t.srcUrl, '/OperatorAvatar.png')),
                        (t.footerImageLogo =
                            window.bpmsoftoccconfig.footerImageLogo || ''.concat(t.srcUrl, '/mini-logo-grey.png')),
                        (t.attachFileButton =
                            window.bpmsoftoccconfig.attachFileButton || ''.concat(t.srcUrl, '/n-upload-button.svg')),
                        (t.emojiIcon = window.bpmsoftoccconfig.emojiIcon || ''.concat(t.srcUrl, '/n-smile.svg')),
                        (t.pulseImage = window.bpmsoftoccconfig.pulseImage || ''.concat(t.srcUrl, '/n-pulseImage.svg')),
                        (t.widgetButtonSrc =
                            window.bpmsoftoccconfig.widgetButtonSrc || ''.concat(t.srcUrl, '/faq-icon.png')),
                        (t.headerImageSrc =
                            window.bpmsoftoccconfig.headerImageSrc || ''.concat(t.srcUrl, '/bpmsoft.svg')),
                        (t.sendButtonIcon =
                            window.bpmsoftoccconfig.sendButtonIcon || ''.concat(t.srcUrl, '/n-send-button.svg')),
                        (t.menuButtonIcon = window.bpmsoftoccconfig.menuButtonIcon || ''.concat(t.srcUrl, '/more.png')),
                        (t.themeColor =
                            'linear-gradient(180deg,' + window.bpmsoftoccconfig.themeColor + ' 63%,rgba(255,203,2,0))'),
                        t
                    );
                },
            },
            d = {
                mixins: [p],
                components: {},
                data: function () {
                    return {};
                },
                methods: {
                    hide: function () {
                        this.$parent.isVisible = !1;
                    },
                    showChannels: function () {
                        this.$parent.forceShowChannels = !0;
                    },
                },
            },
            m = d,
            f = (o('cbe1'), o('2877')),
            g = Object(f['a'])(m, r, l, !1, null, '39583307', null),
            h = g.exports,
            u = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    'div',
                    {
                        staticClass:
                            'bpmsoftocc-widget-button-wrapper bpmsoftocc-widget-button-position-bottom-right bpmsoftocc-widget-button-visible ',
                        attrs: { id: 'bpmsoftoccchat-widget-startbutton', 'data-bpmsoftoccchat-button-cont': '' },
                        on: { click: t.onClick },
                    },
                    [
                        o(
                            'div',
                            {
                                staticClass: 'bpmsoftocc-widget-button-popup',
                                style: { 'background-color': t.themeColor },
                                attrs: { 'data-bpmsoftoccchat-hello-cont': '' },
                            },
                            [
                                o('span', {
                                    staticClass: 'bpmsoftocc-widget-button-popup-btn-hide',
                                    attrs: { 'data-bpmsoftocc-hello-btn-hide': '' },
                                }),
                                t._m(0),
                                o('div', {
                                    staticClass: 'bpmsoftocc-widget-button-popup-triangle',
                                    style: { 'background-color': t.themeColor },
                                }),
                            ]
                        ),
                        o(
                            'div',
                            {
                                staticClass: 'bpmsoftocc-widget-button-inner-container',
                                attrs: { 'data-bpmsoftoccchat-button-block-button': '' },
                            },
                            [
                                o('div', {
                                    staticClass: 'bpmsoftocc-widget-button-inner-mask',
                                    attrs: { 'data-bpmsoftoccchat-button-block-border': '' },
                                }),
                                o('div', { staticClass: 'bpmsoftocc-widget-button-block' }, [
                                    o('div', {
                                        staticClass:
                                            'bpmsoftocc-widget-button-pulse bpmsoftocc-widget-button-pulse-animate',
                                        style: { 'background-color': t.themeColor },
                                        attrs: { 'data-bpmsoftoccchat-button-pulse': '' },
                                    }),
                                ]),
                            ]
                        ),
                        t.startButtonSvg
                            ? t._e()
                            : o('div', [
                                  o('img', {
                                      staticClass: 'bpmsoftocc-widget-button-pulse-image',
                                      attrs: { src: t.pulseImage },
                                  }),
                              ]),
                        t.startButtonSvg
                            ? o('div', [
                                  o('img', {
                                      staticClass: 'bpmsoftocc-widget-button-pulse-image',
                                      attrs: { src: t.startButtonSvg },
                                  }),
                              ])
                            : t._e(),
                    ]
                );
            },
            b = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o('div', { staticClass: 'bpmsoftocc-widget-button-popup-inner' }, [
                        o('div', { staticClass: 'bpmsoftocc-widget-button-popup-image' }, [
                            o('span', {
                                staticClass: 'bpmsoftocc-widget-button-popup-image-item',
                                attrs: { 'data-bpmsoftocc-hello-icon': '' },
                            }),
                        ]),
                        o('div', { staticClass: 'bpmsoftocc-widget-button-popup-content' }, [
                            o('div', {
                                staticClass: 'bpmsoftocc-widget-button-popup-name',
                                attrs: { 'data-bpmsoftocc-hello-name': '' },
                            }),
                            o('div', {
                                staticClass: 'bpmsoftocc-widget-button-popup-description',
                                attrs: { 'data-bpmsoftocc-hello-text': '' },
                            }),
                        ]),
                    ]);
                },
            ],
            v = {
                mixins: [p],
                data: function () {
                    return {};
                },
                methods: {
                    onClick: function () {
                        if (this.showChannelPanel) this.$parent.showChannels();
                        else {
                            var t = this.$parent.loadHistory();
                            if (
                                (this.connectWssWithoutClick || t || this.$parent.signalRConnection(),
                                this.sendInitialMessageOnWidgetButtonClick)
                            ) {
                                var e = this;
                                setTimeout(function () {
                                    e.$parent.addInitialMessage();
                                }, 2e3),
                                    (t = this.$parent.loadHistory()),
                                    t &&
                                        t.messages.some(function (t) {
                                            return 1 != t.initialMessage;
                                        }) &&
                                        (this.isWidgetVisible = !0);
                            }
                            this.$parent.showChat();
                        }
                    },
                },
            },
            w = v,
            C = (o('97b6'), Object(f['a'])(w, u, b, !1, null, null, null)),
            M = C.exports,
            I = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o('div', { staticClass: 'bpmsoftoccchat-conversation-footer' }, [
                    o(
                        'div',
                        {
                            directives: [
                                { name: 'show', rawName: 'v-show', value: !t.hideTextbox, expression: '!hideTextbox' },
                            ],
                            staticClass: 'bpmsoftoccchat-composer',
                        },
                        [
                            t._m(0),
                            o('textarea', {
                                directives: [
                                    {
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: t.currentMessage,
                                        expression: 'currentMessage',
                                    },
                                ],
                                attrs: {
                                    id: 'bpmsoftoccchat-sendbox-textarea',
                                    disabled: t.isDisabled || t.isLoading || !t.isConnectedToServer,
                                    placeholder: t.textBoxPlaceholder,
                                },
                                domProps: { value: t.currentMessage },
                                on: {
                                    keypress: [
                                        function (e) {
                                            return !e.type.indexOf('key') &&
                                                t._k(e.keyCode, 'space', 32, e.key, [' ', 'Spacebar'])
                                                ? null
                                                : t.clienttyping(t.currentMessage);
                                        },
                                        function (e) {
                                            if (!e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter'))
                                                return null;
                                            e.preventDefault(),
                                                t.onsendclick(t.currentMessage),
                                                t.clearCurrentMessage();
                                        },
                                    ],
                                    input: function (e) {
                                        e.target.composing || (t.currentMessage = e.target.value);
                                    },
                                },
                            }),
                            t.isDisabled
                                ? t._e()
                                : o(
                                      'div',
                                      { staticClass: 'bpmsoftoccchat-composer-buttons' },
                                      [
                                          t.enableFileUpload
                                              ? o('div', { staticClass: 'bpmsoftoccchat-composer-upload-button' }, [
                                                    o(
                                                        'label',
                                                        {
                                                            staticClass: 'bpmsoftocc-upload-image-label',
                                                            attrs: { for: 'bpmsoftocc-file-input' },
                                                            on: {
                                                                click: function (t) {
                                                                    if (
                                                                        (t.preventDefault(),
                                                                        t.target !== t.currentTarget)
                                                                    )
                                                                        return null;
                                                                },
                                                            },
                                                        },
                                                        [
                                                            o('img', {
                                                                staticClass: 'bpmsoftocc-upload-image-img',
                                                                attrs: { src: t.fileUploadImg },
                                                                on: {
                                                                    click: [
                                                                        t.onFileUploadClick,
                                                                        function (t) {
                                                                            if (
                                                                                (t.preventDefault(),
                                                                                t.target !== t.currentTarget)
                                                                            )
                                                                                return null;
                                                                        },
                                                                    ],
                                                                },
                                                            }),
                                                        ]
                                                    ),
                                                    o('input', {
                                                        ref: 'fileInput',
                                                        staticStyle: { display: 'none' },
                                                        attrs: { type: 'file', id: 'bpmsoftocc-file-input' },
                                                        on: { change: t.onFileChange },
                                                    }),
                                                ])
                                              : t._e(),
                                          t.isDisabled
                                              ? t._e()
                                              : o('emoji-picker', {
                                                    staticClass: 'bpmsoftoccchat-app',
                                                    attrs: { search: t.search },
                                                    on: { emoji: t.insert },
                                                    scopedSlots: t._u(
                                                        [
                                                            {
                                                                key: 'emoji-invoker',
                                                                fn: function (e) {
                                                                    var n = e.events.click;
                                                                    return t.isMozillaFireFoxBrowser()
                                                                        ? o(
                                                                              'div',
                                                                              {
                                                                                  on: {
                                                                                      click: function (t) {
                                                                                          return (
                                                                                              t.stopPropagation(), n(t)
                                                                                          );
                                                                                      },
                                                                                  },
                                                                              },
                                                                              [
                                                                                  o(
                                                                                      'button',
                                                                                      {
                                                                                          attrs: {
                                                                                              id: 'bpmsoftocc-smile',
                                                                                              type: 'button',
                                                                                              disabled:
                                                                                                  t.isConnectedToServer,
                                                                                          },
                                                                                      },
                                                                                      [
                                                                                          o('img', {
                                                                                              staticClass:
                                                                                                  'bpmsoftoccchat-smile-img',
                                                                                              attrs: {
                                                                                                  src: t.emojiIcon,
                                                                                              },
                                                                                              on: { click: n },
                                                                                          }),
                                                                                      ]
                                                                                  ),
                                                                              ]
                                                                          )
                                                                        : o(
                                                                              'div',
                                                                              {
                                                                                  on: {
                                                                                      click: function (t) {
                                                                                          return (
                                                                                              t.stopPropagation(), n(t)
                                                                                          );
                                                                                      },
                                                                                  },
                                                                              },
                                                                              [
                                                                                  o(
                                                                                      'button',
                                                                                      {
                                                                                          attrs: {
                                                                                              id: 'bpmsoftocc-smile',
                                                                                              type: 'button',
                                                                                              disabled:
                                                                                                  t.isDisabled ||
                                                                                                  t.isLoading ||
                                                                                                  !t.isConnectedToServer,
                                                                                          },
                                                                                      },
                                                                                      [
                                                                                          o('img', {
                                                                                              staticClass:
                                                                                                  'bpmsoftoccchat-smile-img',
                                                                                              attrs: {
                                                                                                  src: t.emojiIcon,
                                                                                              },
                                                                                          }),
                                                                                      ]
                                                                                  ),
                                                                              ]
                                                                          );
                                                                },
                                                            },
                                                            {
                                                                key: 'emoji-picker',
                                                                fn: function (e) {
                                                                    var n = e.emojis,
                                                                        s = e.insert;
                                                                    return o(
                                                                        'div',
                                                                        {
                                                                            staticClass:
                                                                                'bpmsoftoccchat-smile-container',
                                                                        },
                                                                        [
                                                                            o(
                                                                                'div',
                                                                                {
                                                                                    staticClass:
                                                                                        'bpmsoftoccchat-emoji-picker',
                                                                                },
                                                                                [
                                                                                    o(
                                                                                        'div',
                                                                                        {
                                                                                            staticClass:
                                                                                                'bpmsoftoccchat-emojis',
                                                                                        },
                                                                                        t._l(n, function (e, n) {
                                                                                            return o(
                                                                                                'div',
                                                                                                { key: n },
                                                                                                [
                                                                                                    o(
                                                                                                        'div',
                                                                                                        t._l(
                                                                                                            e,
                                                                                                            function (
                                                                                                                e,
                                                                                                                n
                                                                                                            ) {
                                                                                                                return o(
                                                                                                                    'span',
                                                                                                                    {
                                                                                                                        key: n,
                                                                                                                        attrs: {
                                                                                                                            title: n,
                                                                                                                        },
                                                                                                                        on: {
                                                                                                                            click: function (
                                                                                                                                t
                                                                                                                            ) {
                                                                                                                                return s(
                                                                                                                                    e
                                                                                                                                );
                                                                                                                            },
                                                                                                                        },
                                                                                                                    },
                                                                                                                    [
                                                                                                                        t._v(
                                                                                                                            t._s(
                                                                                                                                e
                                                                                                                            )
                                                                                                                        ),
                                                                                                                    ]
                                                                                                                );
                                                                                                            }
                                                                                                        ),
                                                                                                        0
                                                                                                    ),
                                                                                                ]
                                                                                            );
                                                                                        }),
                                                                                        0
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    );
                                                                },
                                                            },
                                                        ],
                                                        null,
                                                        !0
                                                    ),
                                                }),
                                      ],
                                      1
                                  ),
                            o('button', {
                                staticClass: 'bpmsoftoccchat-composer-send-button',
                                style: { 'background-image': 'url(' + t.sendButtonIcon + ')' },
                                on: {
                                    click: function (e) {
                                        t.onsendclick(t.currentMessage), t.clearCurrentMessage();
                                    },
                                },
                            }),
                        ]
                    ),
                    o('div', { staticClass: 'bpmsoftoccchat-footer' }, [
                        o('div', { staticClass: 'bpmsoftoccchat-footer-title' }, [
                            o('span', [t._v('\n                ' + t._s(t.footerTitle) + '\n            ')]),
                        ]),
                        o('div', { staticClass: 'bpmsoftoccchat-footer-titleName' }, [
                            o('a', { attrs: { href: t.footerLink, target: '_blank' } }, [
                                t._v('\n                ' + t._s(t.footerTitleName) + '\n            '),
                            ]),
                        ]),
                    ]),
                ]);
            },
            S = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o('pre', [o('br')]);
                },
            ],
            k = (o('28a5'), o('cebc')),
            y = o('bc3a'),
            T = o.n(y),
            O = o('669f'),
            _ = o.n(O),
            x = {
                components: { 'emoji-picker': _.a },
                mixins: [p],
                props: ['onsendclick', 'onemojisend', 'onfileuploaded', 'isDisabled', 'hide-textbox', 'clienttyping'],
                data: function () {
                    return {
                        currentMessage: '',
                        isLoading: !1,
                        search: '',
                        emojiSet: ['👍', '👎', '😭', '😕', '😐', '😊', '😍'],
                    };
                },
                mounted: function () {
                    this.setResizeEvent();
                },
                computed: Object(k['a'])({}, Object(s['c'])(['isConnectedToServer']), {
                    fileUploadImg: function () {
                        return this.isLoading ? ''.concat(this.srcUrl, '/file-loading.gif') : this.attachFileButton;
                    },
                    textBoxPlaceholder: function () {
                        return this.isLoading
                            ? this.fileLoadingPlaceholder
                            : this.isDisabled
                              ? this.chatButtonsPlaceholder
                              : this.chatMessagePlaceholder;
                    },
                    widgetIsConnectedToServer: function () {
                        return this.$store.state.widgetIsConnectedToServer;
                    },
                }),
                methods: {
                    isMozillaFireFoxBrowser: function () {
                        var t = navigator.userAgent.toLowerCase();
                        return /firefox/.test(t);
                    },
                    setResizeEvent: function () {
                        var t;
                        t = function (t, e, o) {
                            t.addEventListener(e, o, !1);
                        };
                        var e = document.getElementById('bpmsoftoccchat-sendbox-textarea');
                        function o() {
                            (e.style.height = 'auto'), (e.style.height = e.scrollHeight + 'px');
                        }
                        function n() {
                            window.setTimeout(o, 0);
                        }
                        t(e, 'change', o),
                            t(e, 'cut', n),
                            t(e, 'paste', n),
                            t(e, 'drop', n),
                            t(e, 'keydown', n),
                            e.focus(),
                            e.select(),
                            o();
                    },
                    butCli: function () {
                        document.getElementById('bpmsoftocc-smile').click();
                    },
                    clearCurrentMessage: function () {
                        this.currentMessage = '';
                    },
                    onFileUploadClick: function () {
                        this.isDisabled || this.isLoading || this.$refs.fileInput.click();
                    },
                    onFileChange: function (t) {
                        var e = this;
                        try {
                            var o = t.target.files[0],
                                n = new FormData();
                            n.append('file', o, o.name);
                            var s = this;
                            T.a
                                .post(this.fileServerUrl, n, {
                                    onUploadProgress: function (t) {
                                        e.$parent.logUploadProgress(t.loaded, t.total);
                                    },
                                })
                                .then(function (t) {
                                    s.isLoading = !1;
                                    var e = t.data.result.realPath.split(/[\\/]/),
                                        o = t.data.result.name || e.pop(),
                                        n = { name: o, link: t.data.result.downloadLink, size: t.data.result.size };
                                    s.onfileuploaded(n);
                                })
                                .catch(function (t) {
                                    (s.isLoading = !1), s.$parent.onUploadError(t.response.data.error);
                                }),
                                (this.isLoading = !0),
                                this.$parent.onFileUploadStart({ link: '', name: o.name, size: 0 });
                        } catch (i) {
                            window.console.log(i);
                        }
                    },
                    insert: function (t) {
                        this.currentMessage += t;
                    },
                },
            },
            L = x,
            P = (o('03d1'), Object(f['a'])(L, I, S, !1, null, null, null)),
            B = P.exports,
            F = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o('div', { staticClass: 'bpmsoftoccchat-conversation-body-container' }, [
                    t._m(0),
                    o('div', { staticClass: 'bpmsoftoccchat-conversation-body' }, [
                        o(
                            'div',
                            {
                                staticClass: 'bpmsoftoccchat-conversation-body-profile',
                                style: { background: t.themeColor },
                            },
                            [
                                o('div', { staticClass: 'bpmsoftoccchat-conversation-profile' }, [
                                    o(
                                        'div',
                                        {
                                            staticClass:
                                                'bpmsoftoccchat-team-profile bpmsoftoccchat-team-profile-collapsed bpmsoftoccchat-team-profile-office-hours',
                                        },
                                        [
                                            o('div', { staticClass: 'bpmsoftoccchat-team-profile-compact' }, [
                                                o(
                                                    'div',
                                                    { staticClass: 'bpmsoftoccchat-team-profile-compact-contents' },
                                                    [
                                                        o(
                                                            'div',
                                                            {
                                                                staticClass:
                                                                    'bpmsoftoccchat-team-profile-compact-avatar-container',
                                                            },
                                                            [
                                                                o(
                                                                    'div',
                                                                    {
                                                                        staticClass:
                                                                            'bpmsoftoccchat-team-profile-compact-avatar',
                                                                    },
                                                                    [
                                                                        o(
                                                                            'div',
                                                                            { staticClass: 'bpmsoftoccchat-avatar' },
                                                                            [
                                                                                o('img', {
                                                                                    attrs: { src: t.headerImageSrc },
                                                                                }),
                                                                            ]
                                                                        ),
                                                                    ]
                                                                ),
                                                            ]
                                                        ),
                                                        o(
                                                            'div',
                                                            {
                                                                staticClass:
                                                                    'interco#bpmsoftoccchat-container .bpmsoftoccchat-team-profile-collapsed, #bpmsoftoccchat-container .bpmsoftoccchat-team-profile-collapsed *m-team-profile-compact-body',
                                                            },
                                                            [
                                                                o(
                                                                    'div',
                                                                    {
                                                                        staticClass:
                                                                            'bpmsoftoccchat-team-profile-compact-team-name',
                                                                    },
                                                                    [
                                                                        t._v(
                                                                            '\n                  ' +
                                                                                t._s(t.title) +
                                                                                '\n                '
                                                                        ),
                                                                    ]
                                                                ),
                                                                o(
                                                                    'div',
                                                                    {
                                                                        staticClass:
                                                                            'bpmsoftoccchat-team-profile-compact-team-subtitle not-display',
                                                                    },
                                                                    [
                                                                        t._v(
                                                                            '\n                  ' +
                                                                                t._s(t.subtitle) +
                                                                                '\n                '
                                                                        ),
                                                                    ]
                                                                ),
                                                            ]
                                                        ),
                                                    ]
                                                ),
                                            ]),
                                        ]
                                    ),
                                ]),
                            ]
                        ),
                        o(
                            'div',
                            {
                                staticClass: 'bpmsoftoccchat-conversation-body-parts',
                                attrs: { id: 'bpmsoftoccchat-main-feed' },
                            },
                            [
                                o('div', { staticClass: 'bpmsoftoccchat-conversation-body-parts-wrapper' }, [
                                    o(
                                        'div',
                                        {
                                            staticClass:
                                                'bpmsoftoccchat-conversation-parts bpmsoftoccchat-conversation-parts-scrolled',
                                        },
                                        [
                                            o(
                                                'span',
                                                [
                                                    t.isOperatorExist
                                                        ? o('bpmsoftoccchat-operator-info', { key: t.operatorNameKey })
                                                        : t._e(),
                                                    t.isOperatorExist
                                                        ? o('hr', { staticClass: 'operator-info-divider-line' })
                                                        : t._e(),
                                                    t.messageHistoryExist
                                                        ? t._e()
                                                        : o('div', {
                                                              staticClass: 'bpmsoftoccchat-no-messages-panel',
                                                              domProps: { innerHTML: t._s(t.noMessagesHistoryCaption) },
                                                          }),
                                                    t._l(t.messages, function (e, n) {
                                                        return t.channelPanelMode
                                                            ? t._e()
                                                            : o('bpmsoftoccchat-message', {
                                                                  key: n,
                                                                  attrs: {
                                                                      text: e.text,
                                                                      time: e.time,
                                                                      sentByClient: e.sentByClient,
                                                                      isEmoji: e.isEmoji,
                                                                      initialMessage: e.initialMessage,
                                                                      closeChatMessage: e.closeChatMessage,
                                                                      buttons: e.buttons,
                                                                      attachment: e.attachment,
                                                                      avatarLink: e.avatarLink,
                                                                      operatorName: e.operatorName,
                                                                      operatorInfo: e.operatorInfo,
                                                                      isImage: e.isImage,
                                                                      attachOperatorFile: e.attachOperatorFile,
                                                                      'show-buttons': n == t.messages.length - 1,
                                                                  },
                                                              });
                                                    }),
                                                    t.channelPanelMode ? o('bpmsoftoccchat-channel-panel') : t._e(),
                                                ],
                                                2
                                            ),
                                        ]
                                    ),
                                ]),
                            ]
                        ),
                    ]),
                    t._m(1),
                ]);
            },
            U = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o('div', { staticClass: 'bpmsoftoccchat-conversation-backgrounds' }, [
                        o('div', {
                            staticClass:
                                'bpmsoftoccchat-conversation-background bpmsoftoccchat-conversation-background-1',
                        }),
                    ]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o('span', [o('div', {})]);
                },
            ],
            N = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o('div', [
                    t.initialMessage || t.closeChatMessage || t.operatorInfo
                        ? t._e()
                        : o('div', { class: t.classes }, [
                              o('div', { class: t.classes2 }, [
                                  o('div', { class: t.messageMode }, [
                                      o('div', { staticClass: 'bpmsoftoccchat-blocks' }, [
                                          o(
                                              'div',
                                              { staticClass: 'bpmsoftoccchat-block bpmsoftoccchat-block-paragraph' },
                                              [
                                                  t.attachment || t.isImage
                                                      ? t._e()
                                                      : o('p', {
                                                            staticClass: 'bpmsoftoccchat-',
                                                            domProps: { innerHTML: t._s(t.text) },
                                                        }),
                                                  !t.attachment && t.isImage
                                                      ? o('img', {
                                                            staticClass: 'bpmsoftoccimage',
                                                            attrs: { src: '' + t.text },
                                                        })
                                                      : t._e(),
                                                  t.attachOperatorFile
                                                      ? o('div', { on: { click: t.onDownloadOperatorFileClick } }, [
                                                            o('table', [
                                                                o('tr', [
                                                                    o('td', [
                                                                        o('p', {
                                                                            staticClass:
                                                                                'bpmsoftoccchat-attachment-name',
                                                                            domProps: {
                                                                                innerHTML: t._s(
                                                                                    t.attachOperatorFile.filename
                                                                                ),
                                                                            },
                                                                        }),
                                                                    ]),
                                                                    o('td', [
                                                                        t.attachOperatorFile.contentLength
                                                                            ? o('p', {
                                                                                  staticClass:
                                                                                      'bpmsoftoccchat-attachment-size',
                                                                                  domProps: {
                                                                                      innerHTML: t._s(
                                                                                          (
                                                                                              t.attachOperatorFile
                                                                                                  .contentLength /
                                                                                              1024 /
                                                                                              1024
                                                                                          ).toFixed(2) + ' Mb'
                                                                                      ),
                                                                                  },
                                                                              })
                                                                            : t._e(),
                                                                    ]),
                                                                    o('td', [
                                                                        o('img', {
                                                                            staticClass: 'bpmsoftocc-download-icon',
                                                                            attrs: {
                                                                                src: t.bpmsoftoccDownloadClientIcon,
                                                                                alt: 'download file',
                                                                            },
                                                                        }),
                                                                    ]),
                                                                ]),
                                                            ]),
                                                        ])
                                                      : t._e(),
                                                  t.attachment
                                                      ? o('div', { on: { click: t.onDownloadClick } }, [
                                                            o('table', [
                                                                o('tr', [
                                                                    o('td', [
                                                                        o('p', {
                                                                            staticClass:
                                                                                'bpmsoftoccchat-attachment-name',
                                                                            domProps: {
                                                                                innerHTML: t._s(t.attachment.file.name),
                                                                            },
                                                                        }),
                                                                    ]),
                                                                    o('td', [
                                                                        null == t.attachment.isUploadSuccess ||
                                                                        1 == t.attachment.isUploadSuccess
                                                                            ? o('p', {
                                                                                  staticClass:
                                                                                      'bpmsoftoccchat-attachment-size',
                                                                                  domProps: {
                                                                                      innerHTML: t._s(
                                                                                          (
                                                                                              t.attachment.file.size /
                                                                                              1024 /
                                                                                              1024
                                                                                          ).toFixed(2) + ' Mb'
                                                                                      ),
                                                                                  },
                                                                              })
                                                                            : t._e(),
                                                                        0 == t.attachment.isUploadSuccess
                                                                            ? o('p', {
                                                                                  staticClass:
                                                                                      'bpmsoftoccchat-upload-error-label',
                                                                                  attrs: {
                                                                                      title: t.attachment.errorText,
                                                                                  },
                                                                                  domProps: {
                                                                                      innerHTML: t._s(
                                                                                          '' + t.errorFileUploadString
                                                                                      ),
                                                                                  },
                                                                              })
                                                                            : t._e(),
                                                                    ]),
                                                                    o('td', [
                                                                        o('div', {
                                                                            class: t.attachment.isUploading
                                                                                ? 'bt-spinner'
                                                                                : '',
                                                                        }),
                                                                        1 == t.attachment.isUploadSuccess
                                                                            ? o('img', {
                                                                                  staticClass:
                                                                                      'bpmsoftocc-download-icon',
                                                                                  attrs: {
                                                                                      src: t.bpmsoftoccDownloadIcon,
                                                                                      alt: 'download file',
                                                                                  },
                                                                              })
                                                                            : t._e(),
                                                                    ]),
                                                                ]),
                                                            ]),
                                                        ])
                                                      : t._e(),
                                              ]
                                          ),
                                          t.buttons && t.buttons.length > 0 && t.showButtons
                                              ? o(
                                                    'div',
                                                    { staticClass: 'bpmsoftoccchat-bot-buttons' },
                                                    t._l(t.buttons, function (t, e) {
                                                        return o('bpmsoftoccchat-button', {
                                                            key: e,
                                                            attrs: {
                                                                caption: t.caption,
                                                                requestLocation: t.requestLocation,
                                                            },
                                                        });
                                                    }),
                                                    1
                                                )
                                              : t._e(),
                                          o('table', { staticStyle: { 'border-width': '0px' } }, [
                                              o('tr', [
                                                  o('td', { staticStyle: { width: '20%' } }, [
                                                      t.attachment && null == t.attachment.isUploadSuccess
                                                          ? o('p', {
                                                                staticClass: 'bpmsoftoccchat-upload-percentage',
                                                                domProps: {
                                                                    innerHTML: t._s(
                                                                        t.attachment.uploadingProgress + '%'
                                                                    ),
                                                                },
                                                            })
                                                          : t._e(),
                                                      t.attachment && 1 == t.attachment.isUploadSuccess
                                                          ? o('p', {
                                                                staticClass: 'bpmsoftoccchat-upload-success-label',
                                                                domProps: {
                                                                    innerHTML: t._s('' + t.successFileUploadString),
                                                                },
                                                            })
                                                          : t._e(),
                                                  ]),
                                                  o('td', { staticStyle: { width: '80%' } }),
                                                  o('td', { staticStyle: { width: '10%' } }, [
                                                      o('p', { class: t.timeMode }, [t._v(t._s(t.toTimeFormat))]),
                                                  ]),
                                              ]),
                                          ]),
                                      ]),
                                  ]),
                              ]),
                          ]),
                    t.initialMessage || !t.closeChatMessage || t.operatorInfo
                        ? t._e()
                        : o('div', { staticClass: 'bpmsoftoccchat-notification-message' }, [
                              o('p', { staticClass: 'bpmsoftoccchat-notification-message-phrase' }, [
                                  t._v(t._s(t.text)),
                              ]),
                          ]),
                    t.operatorInfo
                        ? o('div', { staticClass: 'bpmsoftoccchat-operator-info' }, [
                              o('div', { staticClass: 'bpmsoftoccchat-operator-info-image-container' }, [
                                  o('img', {
                                      staticClass: 'bpmsoftoccchat-operator-info-image',
                                      attrs: { src: '' + t.avatarLink },
                                  }),
                              ]),
                              o('p', { staticClass: 'bpmsoftoccchat-operator-info-name' }, [t._v(t._s(t.text))]),
                              o('p', {
                                  staticClass: 'bpmsoftoccchat-operator-info-remainder',
                                  domProps: { innerHTML: t._s(t.operatorInfoMessage) },
                              }),
                          ])
                        : t._e(),
                ]);
            },
            j = [],
            E = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    'button',
                    {
                        class: t.classes,
                        on: {
                            click: function (e) {
                                return t.onbuttonclick();
                            },
                        },
                    },
                    [t._v(' ' + t._s(t.caption) + ' ')]
                );
            },
            H = [],
            $ = {
                props: { caption: { type: String, default: '' }, requestLocation: { type: Boolean, default: !1 } },
                data: function () {
                    return { classes: 'bpmsoftoccchat-bot-button' };
                },
                methods: {
                    onbuttonclick: function () {
                        this.$parent.$parent.$parent.onMessageButtonClick({
                            caption: this.caption,
                            requestLocation: this.requestLocation,
                        });
                    },
                },
            },
            D = $,
            W = Object(f['a'])(D, E, H, !1, null, null, null),
            R = W.exports,
            z = {
                mixins: [p],
                props: [
                    'text',
                    'time',
                    'sentByClient',
                    'initialMessage',
                    'closeChatMessage',
                    'isEmoji',
                    'buttons',
                    'showButtons',
                    'attachment',
                    'avatarLink',
                    'operatorInfo',
                    'operatorName',
                    'isImage',
                    'attachOperatorFile',
                ],
                computed: {
                    toTimeFormat: function () {
                        return this.timeFormatFuntion ? this.timeFormatFuntion(this.time) : '';
                    },
                },
                methods: {
                    onDownloadClick: function () {
                        this.attachment.file.link && window.open(this.attachment.file.link, '_self');
                    },
                    onDownloadOperatorFileClick: function () {
                        this.attachOperatorFile.fileLink && window.open(this.attachOperatorFile.fileLink);
                    },
                },
                components: { 'bpmsoftoccchat-button': R },
                data: function () {
                    return {
                        classes: this.sentByClient
                            ? 'bpmsoftoccchat-conversation-part bpmsoftoccchat-conversation-part-user'
                            : 'bpmsoftoccchat-conversation-part bpmsoftoccchat-conversation-part-admin bpmsoftoccchat-conversation-part-grouped ',
                        classes2: this.sentByClient
                            ? 'bpmsoftoccchat-comment-container bpmsoftoccchat-comment-container-user'
                            : 'bpmsoftoccchat-comment-container bpmsoftoccchat-comment-container-admin ',
                        messageMode: this.isEmoji ? 'bpmsoftoccchat-comment-emoji' : 'bpmsoftoccchat-comment',
                        timeMode: this.isEmoji ? 'bpmsoftocc-msg-time-emoji' : 'bpmsoftocc-msg-time',
                        styl: 'background-color: ' + this.$parent.$parent.themeColor,
                    };
                },
            },
            A = z,
            V = (o('730a'), Object(f['a'])(A, N, j, !1, null, '56474bd0', null)),
            q = V.exports,
            J = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    'div',
                    [
                        o('p', { staticClass: 'bpmsoftoccchat-conversation-channel-header' }, [
                            t._v(t._s(t.channelPanelHeader)),
                        ]),
                        t._l(t.channelsInPanel, function (t, e) {
                            return o('bpmsoftoccchat-channel-panel-element', {
                                key: e,
                                attrs: { type: t.type, name: t.name, link: t.link, 'close-on-click': t.closeOnClick },
                            });
                        }),
                    ],
                    2
                );
            },
            K = [],
            Z = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    'div',
                    { staticClass: 'bpmsoftoccchat-channel-row pointer-cursor', on: { click: t.onClick } },
                    [
                        o('img', { staticClass: 'pointer-cursor', attrs: { src: t.imageSrc } }),
                        o('span', { staticClass: 'pointer-cursor' }, [t._v(t._s(t.name))]),
                    ]
                );
            },
            G = [],
            Y = {
                mixins: [p],
                props: ['type', 'name', 'link'],
                computed: {
                    imageSrc: function () {
                        return ''.concat(this.srcUrl, '/').concat(this.type, '.png');
                    },
                },
                methods: {
                    onClick: function () {
                        if ('widget' != this.type) window.open(this.link, '_blank');
                        else {
                            if (
                                (this.$store.state.isConnectedToServer ||
                                    this.$parent.$parent.$parent.signalRConnection(),
                                this.sendInitialMessageOnWidgetButtonClick)
                            ) {
                                var t = this;
                                setTimeout(function () {
                                    t.$parent.$parent.$parent.addInitialMessage();
                                }, 2e3);
                                var e = this.$parent.$parent.$parent.loadHistory();
                                e &&
                                    e.messages.some(function (t) {
                                        return 1 != t.initialMessage;
                                    }) &&
                                    (this.isWidgetVisible = !0);
                            }
                            this.$parent.$parent.$parent.showChat();
                        }
                    },
                },
            },
            Q = Y,
            X = (o('0147'), Object(f['a'])(Q, Z, G, !1, null, null, null)),
            tt = X.exports,
            et = {
                components: { 'bpmsoftoccchat-channel-panel-element': tt },
                mixins: [p],
                data: function () {
                    return {};
                },
            },
            ot = et,
            nt = (o('d19f'), Object(f['a'])(ot, J, K, !1, null, '4be2b6ef', null)),
            st = nt.exports,
            it = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o('div', { staticClass: 'chat-operator-info' }, [
                    o('div', { staticClass: 'chat-operator-info-image-container' }, [
                        o('img', { staticClass: 'chat-operator-info-image', attrs: { src: t.getOperatorPhotoLink } }),
                    ]),
                    o('p', {
                        staticClass: 'chat-operator-info-name',
                        domProps: { innerHTML: t._s(t.getOperatorName) },
                    }),
                    o('p', {
                        staticClass: 'chat-operator-info-remainder',
                        domProps: { innerHTML: t._s(t.yourOperatorCaption) },
                    }),
                    o('p', {
                        staticClass: 'chat-operator-info-date',
                        domProps: { innerHTML: t._s(t.getOperatorAssignDate) },
                    }),
                ]);
            },
            at = [],
            ct = {
                mixins: [p],
                computed: {
                    getOperatorName: function () {
                        return localStorage.getItem('operatorName');
                    },
                    getOperatorPhotoLink: function () {
                        return localStorage.getItem('operatorPhotoLink');
                    },
                    getOperatorAssignDate: function () {
                        var t = new Date(parseInt(localStorage.getItem('operatorAssignDate')));
                        return t.toLocaleDateString();
                    },
                },
            },
            rt = ct,
            lt = (o('c614'), Object(f['a'])(rt, it, at, !1, null, null, null)),
            pt = lt.exports,
            dt = {
                mixins: [p],
                props: ['messages', 'channel-panel-mode'],
                components: {
                    'bpmsoftoccchat-message': q,
                    'bpmsoftoccchat-channel-panel': st,
                    'bpmsoftoccchat-operator-info': pt,
                },
                data: function () {
                    return { operatorNameKey: null };
                },
                beforeUpdate: function () {
                    localStorage.getItem('operatorName') != this.operatorNameKey &&
                        (this.operatorNameKey = localStorage.getItem('operatorName'));
                },
                computed: {
                    isOperatorExist: function () {
                        return null != this.messages && null != localStorage.getItem('operatorName');
                    },
                    messageHistoryExist: function () {
                        return null != this.messages && 0 != this.messages.length;
                    },
                },
            },
            mt = dt,
            ft = (o('e4fc'), Object(f['a'])(mt, F, U, !1, null, null, null)),
            gt = ft.exports,
            ht =
                (o('3b2b'),
                o('4917'),
                {
                    methods: {
                        setCookie: function (t, e, o) {
                            o = o || {};
                            var n = o.expires || this.cookieSessionTime || 3e6;
                            if ('number' == typeof n && n) {
                                var s = new Date();
                                s.setTime(s.getTime() + n), (n = o.expires = s);
                            }
                            n && n.toUTCString && (o.expires = n.toUTCString()),
                                (o.path = '/'),
                                (e = encodeURIComponent(e));
                            var i = t + '=' + e;
                            for (var a in o) {
                                i += '; ' + a;
                                var c = o[a];
                                !0 !== c && (i += '=' + c);
                            }
                            document.cookie = i;
                        },
                        getCookie: function (t) {
                            var e = document.cookie.match(
                                new RegExp('(?:^|; )' + t.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
                            );
                            return e ? decodeURIComponent(e[1]) : void 0;
                        },
                        clearCookie: function (t) {
                            this.setCookie(t, void 0);
                        },
                    },
                }),
            ut = {
                mixins: [p],
                methods: {
                    saveHistory: function (t) {
                        var e = { time: new Date(), messages: t };
                        localStorage.setItem(this.channelId, JSON.stringify(e));
                    },
                    loadHistory: function () {
                        var t = window.localStorage.getItem(this.channelId);
                        return t ? JSON.parse(t) : null;
                    },
                    clearHistoryIfExpired: function (t) {
                        this.clearCookie(t);
                        var e = this.loadHistory();
                        return e && Math.abs(new Date() - new Date(e.time)) > 6e4 * this.LifeTime
                            ? (window.localStorage.removeItem(this.channelId), null)
                            : e;
                    },
                },
            },
            bt = {
                data: function () {
                    return {
                        signarRConfig: { serverTimeoutInMilliseconds: 3e4, tryReconnectTimeoutInMilliseconds: 2500 },
                    };
                },
            },
            vt = o('e87a'),
            wt = {
                mixins: [ht, p, bt],
                data: function () {
                    return { hubConnection: {} };
                },
                methods: Object(k['a'])({}, Object(s['b'])(['set_isConnectedToServer']), {
                    closeSignalR: function () {
                        this.hubConnection.stop();
                    },
                    setSignalRHandlers: function (t) {
                        var e = this.getCookie('bpmsoftocc:'.concat(this.channelId.toUpperCase()));
                        (this.hubConnection = new vt['a']()
                            .withUrl(
                                ''
                                    .concat(this.connectorUrl, '/site?channelId=')
                                    .concat(this.channelId, '&clientId=')
                                    .concat(e)
                            )
                            .build()),
                            (this.hubConnection.serverTimeoutInMilliseconds =
                                this.signarRConfig.serverTimeoutInMilliseconds),
                            this.hubConnection.on('SetCookies', t.setCookiesHandler),
                            this.hubConnection.on('AddMessage', t.addMessageHandler),
                            this.hubConnection.on('SendTextMessage', t.sendTextMessageHandler),
                            this.hubConnection.on('CloseChatMessage', t.closeChatMessageHandler),
                            this.hubConnection.on('OperatorInfoMessage', t.operatorInfoMessageHandler),
                            this.hubConnection.on('SendImageMessage', t.sendImageMessageHandler),
                            this.hubConnection.on('SendFileMessage', t.sendFileMessageHandler);
                    },
                    connectSignalR: function () {
                        var t = this;
                        this.hubConnection
                            .start()
                            .then(function () {
                                t.set_isConnectedToServer(!0);
                            })
                            .catch(function () {
                                console.error('Не удалось установить соединение с сервером: ' + t.connectorUrl),
                                    t.set_isConnectedToServer(!1),
                                    setTimeout(function () {
                                        t.connectSignalR();
                                    }, t.signarRConfig.tryReconnectTimeoutInMilliseconds);
                            });
                    },
                    sendOkStatus: function () {
                        var t = this;
                        return function (e, o) {
                            try {
                                t.hubConnection.invoke('MessageIsGotten', e, o);
                            } catch (n) {
                                window.console.log('Your connector version is obsolete');
                            }
                        };
                    },
                    getSedMessageToServerMethod: function () {
                        var t = this;
                        return function (e, o) {
                            t.hubConnection.invoke('SendMessageNew', e, o);
                        };
                    },
                    getClientTypingToServerMethod: function () {
                        var t = this;
                        return function (e, o) {
                            t.hubConnection.invoke('SendTypingText', e, o);
                        };
                    },
                }),
            },
            Ct = {
                mixins: [ht, ut, wt, p],
                mounted: function () {
                    var t = this.loadHistory();
                    (!this.showChannelPanel || this.canOperatorInitializeChat || t) &&
                        ((this.connectWssWithoutClick || t || this.withoutStartButton) &&
                            (this.signalRConnection(),
                            this.sendInitialMessageOnWidgetButtonClick &&
                                t &&
                                t.messages.some(function (t) {
                                    return 1 != t.initialMessage;
                                }) &&
                                (this.isWidgetVisible = !0)),
                        this.withoutStartButton && (this.isVisible = !0));
                },
                components: {
                    'bpmsoftoccchat-header': h,
                    'bpmsoftoccchat-widget-button': M,
                    'bpmsoftoccchat-footer': B,
                    'bpmsoftoccchat-body': gt,
                    'bpmsoftoccchat-channel-panel': st,
                },
                data: function () {
                    return {
                        isVisible: !1,
                        forceShowChannels: !1,
                        messages: [],
                        sendMsgToServerMethod: null,
                        sendClientTypingToServer: null,
                        signalRWrapper: {},
                    };
                },
                computed: {
                    visibleMessages: function () {
                        var t = [];
                        document.getElementsByClassName('bpmsoftoccchat-conversation-parts-scrolled').scrollTop = 9999;
                        for (var e = 0; e < this.messages.length; e++)
                            this.messages[e].initialMessage || t.push(this.messages[e]);
                        return t;
                    },
                    lastMessageContainsButtons: function () {
                        return !(
                            !this.visibleMessages ||
                            0 == this.visibleMessages.length ||
                            !this.visibleMessages[this.visibleMessages.length - 1].buttons ||
                            0 == this.visibleMessages[this.visibleMessages.length - 1].buttons.length
                        );
                    },
                    channelPanelModeOn: function () {
                        return (this.showChannelPanel && 0 == this.messages.length) || this.forceShowChannels;
                    },
                },
                methods: {
                    onSendClick: function (t) {
                        if (this.sendMsgToServerMethod) {
                            var e = t.replace(/\n+/g, '\n').trim();
                            if (0 == e.length) return;
                            var o = this.getClientSimpleMessage(e);
                            this.sendMessage(o);
                        }
                    },
                    sendMessage: function (t) {
                        var e = JSON.stringify(t);
                        this.sendMsgToServerMethod(
                            e,
                            window.bpmsoftoccconfig.clientId ? String(window.bpmsoftoccconfig.clientId) : this.clientId
                        );
                    },
                    addOperatorInfoMessage: function (t) {
                        (document.body.getElementsByClassName(
                            'bpmsoftoccchat-team-profile-compact-team-name'
                        )[0].innerText = t.siteOperatorInfo.operatorName),
                            (window.bpmsoftoccconfig.operatorAvatar = t.siteOperatorInfo.operatorPhotoLink),
                            this.addMessage(this.getOperatorInfoMessage(t.siteOperatorInfo.operatorName));
                    },
                    clientTyping: function (t) {
                        var e = t.length,
                            o = t.lastIndexOf(' ');
                        -1 != o &&
                            this.isClientTyping &&
                            e > 0 &&
                            ' ' != t[e - 2] &&
                            ' ' != t[e - 1] &&
                            e - o > 5 &&
                            this.sendClientTypingToServer(
                                t,
                                window.bpmsoftoccconfig.clientId
                                    ? String(window.bpmsoftoccconfig.clientId)
                                    : this.clientId
                            );
                    },
                    getOperatorFileMessage: function (t, e, o) {
                        var n = localStorage.getItem('operatorPhotoLink')
                                ? localStorage.getItem('operatorPhotoLink')
                                : this.operatorAvatar,
                            s = localStorage.getItem('operatorName') ? localStorage.getItem('operatorName') : '',
                            i = {
                                text: '',
                                time: new Date().getTime(),
                                sentByClient: !1,
                                initialMessage: !1,
                                isEmoji: !1,
                                userInfo: {},
                                buttons: [],
                                avatarLink: n,
                                operatorName: s,
                                operatorInfo: !1,
                                isImage: !1,
                                attachOperatorFile: { filename: e, fileLink: t, contentLength: o },
                            };
                        return i;
                    },
                    getOperatorImageMessage: function (t) {
                        var e = localStorage.getItem('operatorPhotoLink')
                                ? localStorage.getItem('operatorPhotoLink')
                                : this.operatorAvatar,
                            o = localStorage.getItem('operatorName') ? localStorage.getItem('operatorName') : '',
                            n = {
                                text: t,
                                time: new Date().getTime(),
                                sentByClient: !1,
                                initialMessage: !1,
                                isEmoji: !1,
                                userInfo: {},
                                buttons: [],
                                avatarLink: e,
                                operatorName: o,
                                operatorInfo: !1,
                                isImage: !0,
                            };
                        return n;
                    },
                    onEmojiSend: function (t) {
                        if (this.sendMsgToServerMethod) {
                            var e = t.replace(/\n+/g, '\n').trim();
                            if (0 == e.length) return;
                            var o = this.getEmojiMessage(e);
                            this.sendMessage(o);
                        }
                    },
                    onFileUploadStart: function (t) {
                        this.addMessage(this.getFileMessage(t));
                    },
                    onUploadError: function (t) {
                        var e = this.messages[this.messages.length - 1];
                        (e.attachment.isUploading = !1),
                            (e.attachment.file.size = 0),
                            (e.attachment.file.link = ''),
                            (e.attachment.uploadingProgress = 0),
                            (e.attachment.isUploadSuccess = !1),
                            (e.attachment.errorText = t),
                            this.messages.pop(),
                            this.addMessage(e);
                    },
                    logUploadProgress: function (t, e) {
                        var o = this.messages[this.messages.length - 1];
                        (o.attachment.isUploading = !0),
                            (o.attachment.file.size = e),
                            (o.attachment.uploadingProgress = ((t / e) * 100).toFixed(0));
                    },
                    onFileUploaded: function (t) {
                        if (this.sendMsgToServerMethod) {
                            var e = t.name,
                                o = t.size;
                            if (0 == e.length || 0 == o.length) return;
                            var n = this.messages[this.messages.length - 1];
                            (n.attachment.isUploading = !1),
                                (n.attachment.name = t.name),
                                (n.attachment.file.size = t.size),
                                (n.attachment.file.link = t.link),
                                (n.text = t.link),
                                (n.attachment.isUploadSuccess = !0),
                                this.messages.pop(),
                                this.sendMessage(n);
                        }
                    },
                    reloadClientId: function () {
                        this.clientId = window.bpmsoftoccconfig.clientId
                            ? String(window.bpmsoftoccconfig.clientId)
                            : this.clientId;
                        var t = this;
                        this.forceReconnectSignalR(function () {
                            return setTimeout(function () {
                                t.$store.state.isConnectedToServer
                                    ? (t.forceSendInitialMessage(), console.log('force initial'))
                                    : setTimeout(function () {
                                          t.forceSendInitialMessage(), console.log('force initial');
                                      }, 2e3);
                            }, 1e3);
                        });
                    },
                    forceReconnectSignalR: function (t) {
                        this.closeSignalR(), t && t.call(this);
                    },
                    signalRConnection: function () {
                        var t = this;
                        if (
                            void 0 == this.hubConnection.connectionState ||
                            'Disconnected' == this.hubConnection.connectionState
                        ) {
                            var e = {
                                setCookiesHandler: function (e, o) {
                                    t.setCookie(e, o);
                                },
                                addMessageHandler: function (e) {
                                    t.clearInputField();
                                    var o = JSON.parse(e);
                                    t.addMessage(o);
                                },
                                sendTextMessageHandler: function (e) {
                                    e.text &&
                                        (e.buttons ||
                                            (t.clearInputField(),
                                            t.addOperatorMessage(
                                                t.getOperatorSimpleMessage(e.text),
                                                t.canOperatorInitializeChat
                                            )),
                                        e.buttons &&
                                            (0 == e.buttons.length && t.clearInputField(),
                                            t.addOperatorMessage(
                                                t.getOperatorButtonsMessage(e),
                                                t.canOperatorInitializeChat
                                            )),
                                        t.sendOkStatusMethod(
                                            e.id,
                                            window.bpmsoftoccconfig.clientId
                                                ? String(window.bpmsoftoccconfig.clientId)
                                                : t.clientId
                                        ));
                                },
                                sendFileMessageHandler: function (e) {
                                    (e.text || e.OperatorFile) &&
                                        (t.addMessage(
                                            t.getOperatorFileMessage(
                                                e.text,
                                                e.operatorFile.fileName,
                                                e.operatorFile.contentLength
                                            )
                                        ),
                                        t.sendOkStatusMethod(
                                            e.id,
                                            window.bpmsoftoccconfig.clientId
                                                ? String(window.bpmsoftoccconfig.clientId)
                                                : t.clientId
                                        ));
                                },
                                operatorInfoMessageHandler: function (e) {
                                    if (e.siteOperatorInfo) {
                                        var o = e.siteOperatorInfo;
                                        localStorage.setItem('operatorPhotoLink', o.operatorPhotoLink),
                                            localStorage.setItem('operatorName', o.operatorName),
                                            localStorage.setItem('operatorAssignDate', new Date().getTime()),
                                            t.addOperatorInfoMessage(e);
                                    }
                                    t.sendOkStatusMethod(
                                        e.id,
                                        window.bpmsoftoccconfig.clientId
                                            ? String(window.bpmsoftoccconfig.clientId)
                                            : t.clientId
                                    );
                                },
                                sendImageMessageHandler: function (e) {
                                    e.text &&
                                        (t.addMessage(t.getOperatorImageMessage(e.text)),
                                        t.sendOkStatusMethod(
                                            e.id,
                                            window.bpmsoftoccconfig.clientId
                                                ? String(window.bpmsoftoccconfig.clientId)
                                                : t.clientId
                                        ));
                                },
                                closeChatMessageHandler: function (e) {
                                    t.addCloseChatMessage(e.text),
                                        t.sendOkStatusMethod(
                                            e.id,
                                            window.bpmsoftoccconfig.clientId
                                                ? String(window.bpmsoftoccconfig.clientId)
                                                : t.clientId
                                        );
                                },
                            };
                            this.setSignalRHandlers(e),
                                (this.sendMsgToServerMethod = this.getSedMessageToServerMethod()),
                                (this.sendOkStatusMethod = this.sendOkStatus()),
                                (this.sendClientTypingToServer = this.getClientTypingToServerMethod()),
                                this.connectSignalR(),
                                this.reloadMessageHistory(),
                                this.hubConnection.onclose(function () {
                                    t.set_isConnectedToServer(!1), t.signalRConnection(e);
                                });
                        } else console.log('Socket connection already established!');
                    },
                    reloadMessageHistory: function () {
                        this.messages = [];
                        var t = this.clearHistoryIfExpired('bpmsoftocc:' + this.channelId);
                        t && (this.messages = t.messages);
                    },
                    showChat: function () {
                        var t = this;
                        setTimeout(
                            function () {
                                var e = !1;
                                t.$store.state.isConnectedToServer ||
                                    (t.connectWssWithoutClick ? console.log('') : (e = !0)),
                                    t.getCookie('bpmsoftocc:'.concat(t.channelId)) ||
                                        e ||
                                        (t.signalRConnection(),
                                        setTimeout(function () {
                                            t.addInitialMessage();
                                        }, 500));
                            },
                            this.connectWssWithoutClick ? 10 : 2e3
                        ),
                            (this.isVisible = !0);
                        var e = this.loadHistory();
                        e || this.addWelcomeMessage(),
                            e || this.welcomeMessage || (this.showChannelPanel = !1),
                            (this.forceShowChannels = !1),
                            this.rerenderFeed();
                    },
                    showChannels: function () {
                        (this.isVisible = !0), this.rerenderFeed();
                    },
                    requestUserLocation: function () {
                        navigator.geolocation.getCurrentPosition(
                            function (t) {
                                var e = { latitude: t.coords.latitude, longitude: t.coords.longitude };
                                if (e) {
                                    var o = this.getClientSimpleMessage(JSON.stringify(e));
                                    (o.messageType = 'Location'), this.sendMessage(o);
                                } else window.console.log('Request User Location error');
                            }.bind(this),
                            function (t) {
                                1 == t.code && window.console.log('access is denied');
                            }
                        );
                    },
                    onMessageButtonClick: function (t) {
                        if (((t.caption = t.caption.replace(/<[^>]*>?/gm, '')), t.requestLocation))
                            this.requestUserLocation();
                        else {
                            var e = this.getClientSimpleMessage(t.caption);
                            this.sendMessage(e);
                        }
                    },
                    addMessage: function (t) {
                        t.isImage || (t.text = this.linkify(t.text)),
                            this.messages.push(t),
                            this.rerenderFeed(),
                            this.saveHistory(this.messages);
                    },
                    addOperatorMessage: function (t, e) {
                        this.addMessage(t), e && (this.showChat(), (this.isWidgetVisible = !0));
                    },
                    addWelcomeMessage: function () {
                        this.welcomeMessage &&
                            0 == this.messages.length &&
                            this.addOperatorMessage(this.getOperatorButtonsMessage(this.welcomeMessage));
                    },
                    addCloseChatMessage: function (t) {
                        this.addMessage(this.getCloseChatMessage(t));
                    },
                    forceSendInitialMessage: function () {
                        var t = this.getClientSimpleMessage(this.initialMessageText);
                        t.initialMessage = !0;
                        var e = JSON.stringify(t);
                        this.sendMsgToServerMethod
                            ? this.sendMsgToServerMethod(
                                  e,
                                  window.bpmsoftoccconfig.clientId
                                      ? String(window.bpmsoftoccconfig.clientId)
                                      : this.clientId
                              )
                            : setTimeout(function () {
                                  this.sendMsgToServerMethod(
                                      e,
                                      window.bpmsoftoccconfig.clientId
                                          ? String(window.bpmsoftoccconfig.clientId)
                                          : this.clientId
                                  );
                              }, 2e3);
                    },
                    addInitialMessage: function () {
                        if (this.sendInitialMessageOnWidgetButtonClick) {
                            for (var t = 0; t < this.messages.length; t++) if (this.messages[t].initialMessage) return;
                            this.forceSendInitialMessage();
                        }
                    },
                    linkify: function (t) {
                        if (!t) return '';
                        var e =
                            /(?:http(?:s)?:\/\/)?(([a-zA-Z0-9\-_.])+@|)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@\\%!\$&'\(\)\*\+,;=.]+/gm;
                        return (
                            (t = t.replace(e, function (t) {
                                var e = /(https?|http?)/.test(t),
                                    o = /(([a-zA-Z0-9\-_.])+@[a-zA-Z_]+?(\.[a-zA-Z]{2,6})+)/.test(t),
                                    n = o ? 'mailto:' + t : e ? t : 'https://' + t;
                                return '<a href="' + n + '" target="_blank" >' + t + '</a>';
                            })),
                            t
                        );
                    },
                    getEmojiMessage: function (t) {
                        var e = {
                            text: t,
                            time: new Date().getTime(),
                            sentByClient: !0,
                            initialMessage: !1,
                            isEmoji: !0,
                            userInfo: {},
                            buttons: [],
                            avatarLink: '',
                            operatorName: '',
                            operatorInfo: !1,
                            isImage: !1,
                        };
                        return e;
                    },
                    getCloseChatMessage: function (t) {
                        var e = localStorage.getItem('operatorPhotoLink')
                                ? localStorage.getItem('operatorPhotoLink')
                                : this.operatorAvatar,
                            o = localStorage.getItem('operatorName') ? localStorage.getItem('operatorName') : '';
                        return {
                            text: this.linkify(t),
                            time: new Date().getTime(),
                            sentByClient: !1,
                            initialMessage: !1,
                            isEmoji: !1,
                            closeChatMessage: !0,
                            userInfo: {},
                            buttons: [],
                            avatarLink: e,
                            operatorName: o,
                            operatorInfo: !1,
                            isImage: !1,
                        };
                    },
                    getFileMessage: function (t) {
                        var e = {
                            text: '|1371|' + t.link,
                            time: new Date().getTime(),
                            sentByClient: !0,
                            initialMessage: !1,
                            isEmoji: !1,
                            userInfo: {},
                            buttons: [],
                            avatarLink: '',
                            operatorName: '',
                            operatorInfo: !1,
                            isImage: !1,
                            attachment: {
                                isUploading: !0,
                                uploadingProgress: 0,
                                uploadadedStatus: null,
                                errorText: '',
                                file: t,
                            },
                        };
                        return e;
                    },
                    getClientSimpleMessage: function (t) {
                        t = t.replace(/<[^>]*>?/gm, '');
                        var e = {
                            text: t,
                            time: new Date().getTime(),
                            sentByClient: !0,
                            initialMessage: !1,
                            isEmoji: !1,
                            userInfo: {},
                            buttons: [],
                            avatarLink: '',
                            operatorName: '',
                            operatorInfo: !1,
                            isImage: !1,
                            clientLocation: location.host,
                        };
                        return e;
                    },
                    getOperatorInfoMessage: function (t) {
                        var e = localStorage.getItem('operatorPhotoLink')
                                ? localStorage.getItem('operatorPhotoLink')
                                : this.operatorAvatar,
                            o = localStorage.getItem('operatorName') ? localStorage.getItem('operatorName') : '',
                            n = {
                                text: t,
                                time: new Date().getTime(),
                                sentByClient: !1,
                                initialMessage: !1,
                                isEmoji: !1,
                                userInfo: {},
                                buttons: [],
                                avatarLink: e,
                                operatorName: o,
                                operatorInfo: !0,
                                isImage: !1,
                            };
                        return n;
                    },
                    getOperatorSimpleMessage: function (t) {
                        if ('[###flushall###]' == t)
                            return (
                                this.messages.splice(0, this.messages.length),
                                (this.showChannelPanel = !1),
                                void localStorage.clear()
                            );
                        var e = localStorage.getItem('operatorPhotoLink')
                                ? localStorage.getItem('operatorPhotoLink')
                                : this.operatorAvatar,
                            o = localStorage.getItem('operatorName') ? localStorage.getItem('operatorName') : '',
                            n = {
                                text: t,
                                time: new Date().getTime(),
                                sentByClient: !1,
                                initialMessage: !1,
                                isEmoji: !1,
                                userInfo: {},
                                buttons: [],
                                avatarLink: e,
                                operatorName: o,
                                operatorInfo: !1,
                                isImage: !1,
                            };
                        return n;
                    },
                    getOperatorButtonsMessage: function (t) {
                        var e = localStorage.getItem('operatorPhotoLink')
                                ? localStorage.getItem('operatorPhotoLink')
                                : this.operatorAvatar,
                            o = localStorage.getItem('operatorName') ? localStorage.getItem('operatorName') : '',
                            n = {
                                text: t.text,
                                time: new Date().getTime(),
                                sentByClient: !1,
                                initialMessage: !1,
                                isEmoji: !1,
                                userInfo: {},
                                buttons: [],
                                avatarLink: e,
                                operatorName: o,
                                operatorInfo: !1,
                                isImage: !1,
                            };
                        if (!t.buttons || 0 == t.buttons.length) return n;
                        for (var s = 0; s < t.buttons.length; s++)
                            n.buttons.push({
                                caption: t.buttons[s].replaceAll('[*GEO*]', ''),
                                requestLocation: !!t.buttons[s].includes('[*GEO*]'),
                            });
                        return n;
                    },
                    clearInputField: function () {
                        var t = document.getElementById('bpmsoftoccchat-sendbox-textarea');
                        (t.innerHTML = ''), t.focus();
                    },
                    rerenderFeed: function () {
                        (document.body.getElementsByClassName(
                            'bpmsoftoccchat-team-profile-compact-team-name'
                        )[0].innerText = localStorage.getItem('operatorName')
                            ? localStorage.getItem('operatorName')
                            : ''),
                            setTimeout(function () {
                                var t = document.getElementById('bpmsoftoccchat-main-feed');
                                t.scrollTop = t.scrollHeight;
                            }, 50);
                    },
                },
            },
            Mt = Ct,
            It = (o('91c4'), Object(f['a'])(Mt, a, c, !1, null, null, null)),
            St = It.exports;
        n['a'].config.productionTip = !1;
        var kt = 'bpmsoftocc-chat';
        window.bpmsoftoccconfig ||
            ((window.bpmsoftoccconfig = {}),
            console.warn('Отсутствует конфиг bpmsoftoccconfig для виджета BPMSoft OCC')),
            document.getElementById(kt)
                ? (window.bpmsoftoccchatvue = new n['a']({
                      render: function (t) {
                          return t(St);
                      },
                      store: i,
                  }).$mount('#'.concat(kt)))
                : console.error(
                      'Виджет BPMSoft OCC не может работать, так как элемент с id "'.concat(kt, '" не найден в DOM.')
                  );
    },
    '730a': function (t, e, o) {
        'use strict';
        o('e7f5');
    },
    '91c4': function (t, e, o) {
        'use strict';
        o('e562');
    },
    '97b6': function (t, e, o) {
        'use strict';
        o('4e17');
    },
    c614: function (t, e, o) {
        'use strict';
        o('4c1d');
    },
    cbe1: function (t, e, o) {
        'use strict';
        o('f189');
    },
    d19f: function (t, e, o) {
        'use strict';
        o('53f0');
    },
    e4fc: function (t, e, o) {
        'use strict';
        o('f0fd');
    },
    e562: function (t, e, o) {},
    e7f5: function (t, e, o) {},
    f0fd: function (t, e, o) {},
    f189: function (t, e, o) {},
    f3a5: function (t, e, o) {},
});
