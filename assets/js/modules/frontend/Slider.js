const Slider = (args) => {
    class Slider{
        constructor(args) {
            if(!args?.container) return;
            this.$slider = $(args.container);
    
            // local variable
            this.width = this.$slider.width();
            this.handle;
            this.handleObj;
    
            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 ' + this.width + ' 83');
    
            this.$slider.html(svg);
            this.$slider.append($('<div>').addClass('active').html(svg.cloneNode(true)));
    
            this.initSlider();
    
            this.createLine();
        }
    
        createLine() {
            this.svgPath = new Proxy({
                x: null,
                y: null,
                b: null,
                a: null
            }, {
                set: (target, key, value)  =>{
                    target[key] = value;
                    if(target.x !== null && target.y !== null && target.b !== null && target.a !== null) {
                        this.$slider.find('svg').html(this.getPath([target.x, target.y], target.b, target.a, this.width));
                    }
                    return true;
                },
                get:(target, key) => {
                    return target[key];
                }
            });
    
            this.svgPath.x = this.width / 2;
            this.svgPath.y = 42;
            this.svgPath.b = 0;
            this.svgPath.a = this.width;
        }
    
        initSlider() {
            this.$slider.slider({
                range: true,
                values: this.$slider.data('values').split(','),
                min: this.$slider.data('min'),
                step: this.$slider.data('step') ?? 1,
                minRange: this.$slider.data('min-range'),
                max: this.$slider.data('max'),
                create: (event, ui) => {
                    const $handle = this.$slider.find('.ui-slider-handle');
    
                    this.$slider.find('.ui-slider-handle').append($('<div />'));
                    
                    $(this.$slider.data('value-0')).html(this.$slider.slider('values', 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
                    $(this.$slider.data('value-1')).html(this.$slider.slider('values', 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
                    $(this.$slider.data('range')).html((this.$slider.slider('values', 1) - this.$slider.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
    
                    this.setCSSVars(this.$slider);
        
                },
                start: (event, ui) => {
    
                    this.$slider.addClass('ui-slider-active');
                    
        
                    this.handle = $(ui.handle).data('index', ui.handleIndex);
                    this.handlehandleObj = this.$slider.find('.ui-slider-handle');
        
                },
                change: (event, ui) => {
                    this.setCSSVars(this.$slider);
                },
                slide: (event, ui) => {
        
                    let min = this.$slider.slider('option', 'min'),
                        minRange = this.$slider.slider('option', 'minRange'),
                        max = this.$slider.slider('option', 'max');
        
                    if(ui.handleIndex == 0) {
                        if((ui.values[0] + minRange) >= ui.values[1]) {
                            this.$slider.slider('values', 1, ui.values[0] + minRange);
                        }
                        if(ui.values[0] > max - minRange) {
                            return false;
                        }
                    } else if(ui.handleIndex == 1) {
                        if((ui.values[1] - minRange) <= ui.values[0]) {
                            this.$slider.slider('values', 0, ui.values[1] - minRange);
                        }
                        if(ui.values[1] < min + minRange) {
                            return false;
                        }
                    }
        
                    $(this.$slider.data('value-0')).html(this.$slider.slider('values', 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
                    $(this.$slider.data('value-1')).html(this.$slider.slider('values', 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
                    $(this.$slider.data('range')).html((this.$slider.slider('values', 1) - this.$slider.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
                    
                    this.setCSSVars(this.$slider);
        
                },
            });
        }
    
        setCSSVars(slider) {
            let handle = slider.find('.ui-slider-handle');
            slider.css({
                '--l': handle.eq(0).position().left + handle.eq(0).outerWidth() / 2,
                '--r': slider.outerWidth() - (handle.eq(1).position().left + handle.eq(1).outerWidth() / 2)
            });
        }
    
        getPoint(point, i, a, smoothing) {
            let cp = (current, previous, next, reverse) => {
                    let p = previous || current,
                        n = next || current,
                        o = {
                            length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                            angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                        },
                        angle = o.angle + (reverse ? Math.PI : 0),
                        length = o.length * smoothing;
                    return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
                },
                cps = cp(a[i - 1], a[i - 2], point, false),
                cpe = cp(point, a[i - 1], a[i + 1], true);
            return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
        }
    
        getPath(update, before, after, width) {
            let smoothing = .16,
                points = [
                    [0, 42],
                    [before <= 0 ? 0 : before, 42],
                    update,
                    [after >= width ? width : after, 42],
                    [width, 42]
                ],
                d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${this.getPoint(point, i, a, smoothing)}`, '');
            return `<path d="${d}" />`;
        }
    }

    return new Slider(args);
}

export default Slider;