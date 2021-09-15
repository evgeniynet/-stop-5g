class stickySocial {

    constructor(socialLinks, options) {
        let option = options || {};
        this.socialLinks = socialLinks;
        this.iconWidth = option.iconWidth || 30;
        this.linkTarget = option.linkTarget || '_blank';
        this.iconsPath = option.iconsPath || 'icons';
        this.yAxix = option.yAxix || '30%';
        this.position = option.position || 'left';
        this.roundedIcons = option.roundedIcons || false;
        this.init();
    }

    init() {
        let keys = Object.keys(this.socialLinks);
        this.template = '';
        keys.forEach(e => {
            let imageSrc = e + ".png";
            this.template += `
                        <a href="${this.socialLinks[e]}" target="${this.linkTarget}"><img src="${this.iconsPath}/${imageSrc}" alt="${e}" width="${this.iconWidth}"></a>
                    `;
        });
        this.render();
    }

    render() {
        let style = `
                    <style>
                        .sticky-social-links {
                            position: fixed;
                            ${(this.position == 'left') ? 'left: 0;' : 'right: 0;'}
                            top: ${this.yAxix};
                            display: flex;
                            flex-direction: column;
                            background-color: #ededed;
                            border: 1px solid #cccccc;
                            padding: 7px;
                            z-index: 2;
                        }
                        .sticky-social-links a {
                            display: block;
                            margin: 5px 0;
                        }
                        .sticky-social-links a img {
                            transition: .6s all;
                            ${(this.roundedIcons) ? 'border-radius: 50%;' : ''}
                        }
                        .sticky-social-links a:hover img {
                            opacity: .8;
                        }
                    </style>
                `;
        let content = `
                    <div class="sticky-social-links">${this.template}</div>
                `;
        document.querySelector('head').insertAdjacentHTML('beforeend', style);
        document.querySelector('body').insertAdjacentHTML('beforeend', content);

    }
}