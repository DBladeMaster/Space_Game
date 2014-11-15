var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "ocean", src: "assets/images/Space_Background.gif" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [2, 2, 226, 178],
            [230, 2, 211, 69],
            [443, 69, 62, 63],
            [443, 2, 65, 65],
            [230, 73, 211, 69],
            [230, 144, 211, 69]
        ],
        "animations": {
            "cloud": [0],
            "instructionsButton": [1],
            "island": [2],
            "plane": [3],
            "playButton": [4],
            "tryAgainButton": [5]
        }
    };
    var spaceSpriteSheetData = {
    "images": ["assets/images/space_image.png"],
        "frames": [
            [2, 69, 34, 36],
            [100, 100, 11, 5],
            [38, 69, 29, 33],
            [69, 69, 29, 33],
            [100, 69, 34, 29],
            [2, 2, 210, 65],
            [214, 67, 48, 40],
            [214, 2, 207, 63]
        ],
        "animations": {
            "Astroid": [0],
            "Spaceship_Bullet": [1],
            "Spaceship_Left": [2],
            "Spaceship_Normal": [3],
            "Spaceship_Right": [4],
            "play": [5],
            "point": [6],
            "try": [7]
    }
};
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.space_image = new createjs.SpriteSheet(spaceSpriteSheetData);
            
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
