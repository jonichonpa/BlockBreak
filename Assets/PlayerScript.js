#pragma strict

var x : double = 0.0;

function Update () {

	x = Input.GetAxis("Horizontal");
	transform.Translate(x * 0.1, 0, 0);

}