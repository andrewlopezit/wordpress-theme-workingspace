import slider from "./Slider";
import $ from 'jquery';

class WorkingspacesMaps {
    constructor( ) {
        this.$workspaceContainer = $('#workspaces-map');
        this.$filterContainer = this.$workspaceContainer.find('.filter-container');
        this.$priceRange = this.$filterContainer.find('.filter > .action-container > .slider#price-range');

        //init slider
        slider({
            container: this.$priceRange.get()[0]
        })
    }
}

export default WorkingspacesMaps;