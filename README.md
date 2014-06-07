EaselJS asset scale patch
=========================

This is a patch to be applied to CreateJS EaselJS and provide multiples assets sizes capabilities.

this patch changes how the CreateJS EaselJS image renderer works and scale all image by a provided factor.

It can be used to create games and apps with multiple screen resolutions support. 
This way you can save processing and memory for each device type and take full advantage of every platform. 

there is no need for code changing.
Your current application can take full advantage of all screen sizes with this patch

 ![multi resolution sample image](/sample/patch.png "Sample image")

It works for createjs.Bitmaps and createjs.Sprites objects.

How to use it
-------------
 
1. first you must have assets for different screen resolutions.

    0.5x scale asset for low resolution screens
    
    ![multi resolution sample image](/sample/assets0.5/monster.png "Sample image")
    
    1x scale asset for standart screens
    
    ![multi resolution sample image](/sample/assets1/monster.png "Sample image")
    
    2x scale asset for high resolution screens
    
    ![multi resolution sample image](/sample/assets2/monster.png "Sample image")
    

2.  Add the script file reference to your main html head tag just after the CreateJS script

        <script src="createjs-2013.12.12.min.js"></script>
        <script src="EaselJSAssetScalePatch.js"></script>

3.  Set the global variable assetscale to match the current asset scale. 

        var assetscale = 2; //it can be any number
        
4.  Load proper scaled image assets, by instance

        var monster = new createjs.Bitmap("assets2x/monster.png") // set the folder or file to match the scale
        var explosion = new createjs.Bitmap("assets2x/explosion.png") // set the folder or file to match the scale
  
Automatically all the assets rendered with EaselJS  will be scaled by this scale factor.


This repo has a simple sample for using this patch
