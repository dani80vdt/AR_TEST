var index = 2;
AFRAME.registerComponent('markerhandler', {

    init: function () {
        console.log("Init");
        const markerSelector = document.querySelector("#markerSelector");
		const minusMarker = document.querySelector("#minus");
        const plusMarker = document.querySelector("#plus");
        const aEntity = document.querySelector("#gauge");

        markerSelector.addEventListener('click', function (ev, target) {
            console.log("Click markerSelector");
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        });

        // every click, we make our model grow in size :)
        minusMarker.addEventListener('click', function (ev, target) {
            console.log("Click minus " +index);
            if (index > 0) {
                index--;
                aEntity.setAttribute('src', './images/gauge' + index.toString() + '.jpg');
            }
            //const scale = aEntity.getAttribute('scale');
            //Object.keys(scale).forEach((key) => scale[key] = scale[key] *0.8);
            //aEntity.setAttribute('scale', scale);
        });
		
        plusMarker.addEventListener('click', function (ev, target) {
            console.log("Click plus " + index);
            if (index < 4) {
                index++;
                aEntity.setAttribute('src', './images/gauge' + index.toString() + '.jpg');
            }
            //const scale = aEntity.getAttribute('scale');
            //Object.keys(scale).forEach((key) => scale[key] = scale[key] *1.2);
            //aEntity.setAttribute('scale', scale);
        });

       
}});