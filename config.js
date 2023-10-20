window.CONFIG = {
    macros: [
        {
            category: 'Programming',
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com',
            normalisedURL: 'github.com',
            triggers: [
                'g',
                'gi',
                'git',
                'gith',
                'githu',
                'github'
            ],
            key: 'KeyG',
            commands: {
                go: {
                    template: '{@}/{$}',
                    description: 'go to user'
                },
                search: {
                    template: '{@}/search?q={$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#171515'
            },
            textColor: '#e8e8e8',
            pinned: true
        },
        {
            category: 'Other',
            name: 'Deepl',
            icon: 'deepl',
            url: 'https://www.deepl.com/translator',
            normalisedURL: 'www.deepl.com/translator',
            triggers: [
                'd',
                'de',
                'dee',
                'deep',
                'deepl',
                'translate'
            ],
            key: 'KeyD',
            commands: {
                search: {
                    template: '{@}#fr/en/{$}',
                    description: 'translate to english'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#0f2b46'
            },
            textColor: '#fff',
            pinned: true
        },
        {
            category: 'School',
            name: 'Notion',
            icon: 'notion',
            url: 'https://www.notion.so/Accueil-c9acd7eb45624448b8f1ba060b417c26',
            normalisedURL: 'www.notion.so/Accueil-c9acd7eb45624448b8f1ba060b417c26',
            triggers: [
                'n',
                'no',
                'not',
                'noti',
                'notio',
                'notion'
            ],
            key: 'KeyN',
            bgColor: {
                type: 'solid',
                color: '#FFFFFF'
            },
            textColor: '#000000',
            pinned: true
        },
        {
            category: 'School',
            name: 'ENT Cesi',
            icon: 'cesi',
            url: 'https://ent.cesi.fr',
            normalisedURL: 'ent.cesi.fr',
            triggers: [
                'e',
                'en',
                'ent',
                'cesi',
                'entcesi',
                'ent.cesi',
                'ent.cesi.fr'
            ],
            key: 'KeyE',
            bgColor: {
                type: 'solid',
                color: '#fbe216'
            },
            textColor: '#000',
            pinned: true
        },
        {
            category: 'Entertainment',
            name: 'YouTube',
            triggers: [
                'y',
                'yt',
                'youtube',
            ],
            key: 'KeyY',
            icon: 'youtube',
            url: 'https://youtube.com',
            normalisedURL: 'youtube.com',
            commands: {
                go: {
                    template: 'https://youtu.be/{$}',
                    description: 'go to video'
                },
                search: {
                    template: '{@}/results?search_query={$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#f30002'
            },
            textColor: '#212121',
            pinned: true
        },
        {
            category: 'Social',
            name: 'Reddit',
            triggers: [
                'r',
                'rd',
                'reddit',
            ],
            key: 'KeyR',
            icon: 'reddit',
            url: 'https://reddit.com',
            normalisedURL: 'reddit.com',
            commands: {
                go: {
                    template: '{@}/r/{$}',
                    description: 'go to subreddit'
                },
                search: {
                    template: '{@}/search?q={$}'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#f07e23', '#f74300'],
                stops: [0, 100]
            },
            textColor: '#fff',
            pinned: true
        },
        {
            category: 'Programming',
            name: 'StackOverflow',
            icon: 'stackoverflow',
            url: 'https://stackoverflow.com',
            normalisedURL: 'stackoverflow.com',
            triggers: [
                's',
                'st',
                'so',
                'stack',
                'stackoverflow'
            ],
            key: 'KeyS',
            commands: {
                search: {
                    template: '{@}/search?q={$}'
                },
                go: {
                    template: '{@}/questions/{$}',
                    description: 'go to question'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#e87922', '#ffbe25'],
                stops: [0, 100]
            },
            textColor: '#212121',
            pinned: true
        },
        {
            category: 'Programming',
            name: 'ChatGPT',
            icon: 'chatGPT',
            url: 'https://chat.openai.com/chat',
            normalisedURL: 'openai.com',
            triggers: [
                'c',
                'chat',
                'gpt',
                'cgpt',
                'chatgpt'
            ],
            key: 'KeyC',
            bgColor: {
                type: 'solid',
                color: '#70a597',
            },
            textColor: '#f7f7f7',
            pinned: true
        },
        {
            category: 'Social',
            name: 'Instagram',
            triggers: [
                'i',
                'ig',
                'insta',
                'instagram'
            ],
            key: 'KeyI',
            icon: 'instagram',
            url: 'https://instagram.com',
            normalisedURL: 'instagram.com',
            commands: {
                go: {
                    template: '{@}/{$}',
                    description: 'go to user'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'radial',
                angle: 'circle at 30% 107%',
                colors: ['#fdf497', '#fdf497', '#fd5949', '#d6249f', '#285aeb'],
                stops: [0, 5, 45, 60, 90]
            },
            textColor: '#e8e8e8',
            pinned: true
        },

        {
            category: 'Music',
            name: 'spotify',
            icon: 'spotify',
            url: 'https://open.spotify.com',
            normalisedURL: 'spotify.com',
            triggers: [
                'music',
                'sp',
                'sfy',
                'spo',
                'spotify'
            ],
            commands: {
                search: {
                    template: '{@}/search/{$}'
                },
                go: {
                    template: '{@}/track/{$}',
                    description: 'go to track'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#1ccc5b'
            },
            textColor: '#000',
            pinned: true
        },
        {
            category: 'Social',
            name: 'Twitch',
            icon: 'twitch',
            url: 'https://twitch.tv',
            normalisedURL: 'twitch.tv',
            triggers: [
                't',
                'tw',
                'twitch',
            ],
            key: 'KeyT',
            commands: {
                search: {
                    template: '{@}/search?term={$}'
                },
                go: {
                    template: '{@}/{$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#8c44f7'
            },
            textColor: '#000',
            pinned: true
        },
        {
            category: 'Entertainment',
            name: 'Netflix',
            triggers: [
                'n',
                'nf',
                'nfx',
                'netflix',
            ],
            key: 'KeyN',
            icon: 'netflix',
            url: 'https://media.netflix.com',
            normalisedURL: 'netflix.com',
            commands: {
                search: {
                    template: '{@}/en/search?&term={$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#000'
            },
            textColor: '#da0813',
            pinned: true
        },
        {
            category: 'Social',
            name: 'X',
            icon: 'X',
            url: 'https://x.com',
            normalisedURL: 'x.com',
            triggers: [
                'tt',
                'twt',
                'twit',
                'twitt',
                'twitter',
                'x'
            ],
            commands: {
                search: {
                    template: '{@}/search?q={$}'
                },
                go: {
                    template: '{@}/{$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#000000'
            },
            textColor: '#e8e8e8',
            pinned: true
        },
        {
            category: 'Work',
            name: 'Linkedin',
            icon: 'linkedin',
            key: 'KeyL',
            triggers: [
                'l',
                'lk',
                'li',
                'linked',
                'linkedin'
            ],
            url: 'https://linkedin.com',
            normalisedURL: 'linkedin.com',
            commands: {
                search: {
                    template: '{@}/search/results/all/?keywords={$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#0077b7'
            },
            textColor: '#fff',
            pinned: true
        },
        {
            category: 'Communication',
            name: 'Gmail',
            icon: 'gmail',
            url: 'https://gmail.com',
            normalisedURL: 'gmail.com',
            triggers: [
                'em',
                'gm',
                'mail',
                'gmail'
            ],
            commands: {
                search: {
                    template: '{@}/#search/{$}'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                angle: 45,
                colors: ['#df493b', '#e8e8e8'],
                stops: [50, 100]
            },
            textColor: '#e8e8e8',
            pinned: true
        },
    ],
    commands: [
        {
            type: 'search',
            trigger: '?'
        },
        {
            type: 'go',
            trigger: '/'
        }
    ],
    engines: {
        google: {
            name: 'Google',
            bgColor: {
                type: 'solid',
                color: '#aaa'
            },
            textColor: '#fff',
            types: {
                // @ - origin query (what user typed); $ - final query (what is in the query field (selected))
                query: {
                    template: 'https://www.google.com/search?q={$}'
                },
                calculator: {
                    template: 'https://www.google.com/search?q={@}'
                },
                currency: {
                    template: 'https://www.google.com/search?q={@}'
                }
            }
        },
        duckDuckGo: {
            name: 'DuckDuckGo',
            bgColor: {
                type: 'solid',
                color: '#e37151'
            },
            textColor: '#e8e8e8',
            types: {
                query: {
                    template: 'https://duckduckgo.com/?q={$}'
                },
                calculator: {
                    template: 'https://duckduckgo.com/?q={@}'
                },
                currency: {
                    template: 'https://duckduckgo.com/?q={@}'
                }
            }
        },
        yandex: {
            name: 'Yandex',
            bgColor: {
                type: 'solid',
                color: '#fc3f1d'
            },
            textColor: '#000',
            types: {
                query: {
                    template: 'https://ya.ru/search/?text={$}'
                },
                calculator: {
                    template: 'https://ya.ru/search/?text={@}'
                },
                currency: {
                    template: 'https://ya.ru/search/?text={@}'
                }
            }
        },
        qwant: {
            name: 'Qwant',
            bgColor: {
                type: 'solid',
                color: '#5992f7'
            },
            textColor: '#000',
            types: {
                query: {
                    template: 'https://www.qwant.com/?q={$}'
                },
                calculator: {
                    template: 'https://www.qwant.com/?q={@}'
                },
                currency: {
                    template: 'https://www.qwant.com/?q={@}'
                }
            }
        },
        bing: {
            name: 'Bing',
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#3ab0f1', '#2351dd', '#40d1da']
            },
            textColor: '#e8e8e8',
            types: {
                query: {
                    template: 'https://www.bing.com/search?q={$}'
                },
                calculator: {
                    template: 'https://www.bing.com/search?q={@}'
                },
                currency: {
                    template: 'https://www.bing.com/search?q={@}'
                }
            }
        },
        brave: {
            name: 'Brave',
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#FB542B', '#343546']
            },
            textColor: '#e8e8e8',
            types: {
                query: {
                    template: 'https://search.brave.com/search?q={$}'
                },
                calculator: {
                    template: 'https://search.brave.com/search?q={@}'
                },
                currency: {
                    template: 'https://search.brave.com/search?q={@}'
                }
            }
        }
    }
}
