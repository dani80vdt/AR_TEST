AFRAME.registerComponent('markerhandler', {

    init: function() {
		const minusMarker = document.querySelector("#minus");
        const plusMarker = document.querySelector("#plus");
        const aEntity = document.querySelector("#gauge_medium");

        // every click, we make our model grow in size :)
        minusMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] - 1);
                aEntity.setAttribute('scale', scale);
            }
        });
		
		plusMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        });
}});