class Scroll {

    constructor(options) {
        this.options = options;
        this.allowload = true;
        this.load(this.options.initLimit);
        this.options.element.on('scroll', this.scrollSlot.bind(this));
    }


    scrollSlot(event) {
        console.log(this.options.element.scrollTop());
        console.log(this.options.element.height());
        console.log(this.options.element.prop("scrollHeight"));

        if (this.options.element.scrollTop() > this.options.element.prop("scrollHeight") - 1.3 * this.options.element.height()) {
            this.load(this.options.limit);
        }

    }

    load(limit) {

        if (this.allowload) {
            this.allowload = false;
            this.options.element.find('.loader').show();
            this.options.element.append(this.options.element.find('.loader'));
            $.ajax(this.options.url, {
                dataType: 'json',
                data: {limit: limit},
                method: "GET"
            }).then(this.loadSuccess.bind(this));
        }

    }

    loadSuccess(response) {
        for (let i = 0; i < response.length; i++) {
            this.addOne(response[i]);
        }
        this.allowload = true;
        this.options.element.find('.loader').hide();
        this.scrollSlot();
    }

    addOne(box) {
        let item = $(this.options.itemTemplate.html());
        item.find('.text').html(box.color);
        item.css('background-color', box.color);
        this.options.element.append(item);
    }
}

