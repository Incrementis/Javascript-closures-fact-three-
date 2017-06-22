//Contains all the needed features of the sphere 
function Sphere()
{
	//Similar to member variables
	var title 		= undefined; 
	var material 	= undefined; 
	var radius 		= undefined; 
	
	//similar to methods  
	return {
		
		setTitle: function(newTitle)//SET
		{
			title = newTitle;
		},	
		setMaterial:  function(newMaterial)
		{
			material = newMaterial;
		},
		setRadius: function(newRadius)
		{
			radius = newRadius;
		},
		getTitle:function()//GET
		{
			return title;
		},
		getMaterial:function()
		{
			return material;
		},
		getRadius:function()
		{
			return radius;
		}
		
	};
}



/*
	NOTE: 
	There are many ways to realize the systems code.
	The focus here lies on closures and it is recommended to see the code as a minimum solution.
*/

function Title()
{
	var mySphere 	= Sphere();
	var resOne 		= document.getElementById('resOne');
	
	//setting the value from browser input
	mySphere.setTitle( document.getElementById('title').value );
	
	//Shows result in browser
	resOne.innerHTML = mySphere.getTitle(); 
	
}



function Material()
{
	var mySphere 	= Sphere();
	var resTwo 		= document.getElementById('resTwo');
	
	//setting the value from browser input
	mySphere.setMaterial( document.getElementById('material').value );
	
	//Shows result in browser
	resTwo.innerHTML = mySphere.getMaterial(); 
}



function Radius()
{
	var mySphere 	= Sphere();
	var resTwo 		= document.getElementById('resThree');
	
	//setting the value from browser input
	mySphere.setRadius( document.getElementById('radius').value );
	
	//Shows result in browser
	resThree.innerHTML = mySphere.getRadius() + " miles"; 
}