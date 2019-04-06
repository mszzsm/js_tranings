function getBrickValume(width){
    
    function getBrickValueWithWidth(length) {
        function getBrickValueWidthAndLength(height){
            

            return width * height * length;
        }

        return getBrickValueWidthAndLength;

    }
    return getBrickValueWithWidth;

}

var brickVolumeWithWidth = getBrickValume(10);
var brickVolumeWithWidthAndLength = brickVolumeWithWidth(20)

