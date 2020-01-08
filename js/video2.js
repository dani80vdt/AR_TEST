AFRAME.registerComponent('video-vidhandler', {
    init: function () {
        console.log('video init entered');
        this.toggle = false;
        this.vid = document.querySelector("#invitation");
        this.vid.play();
    },
    tick: function () {
        if (this.el.object3D.visible === true) {
            if (!this.toggle) {
                this.toggle = true;
                this.vid.play();
            }
        } else {
            this.toggle = false;
            this.vid.pause();
        }
    }
});


AFRAME.registerComponent('video2-vidhandler', {
    init: function () {
        console.log('video init entered');
        this.toggle = false;
        this.vid = document.querySelector("#sintelasset");
        this.vid.pause();
    },
    tick: function () {
        if (this.el.object3D.visible === true) {
            if (!this.toggle) {
                this.toggle = true;
                this.vid.play();
            }
        } else {
            this.toggle = false;
            this.vid.pause();
        }
    }
});

