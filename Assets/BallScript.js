#pragma strict

var FirstForce:Vector3 = Vector3(300, 0, 300);
function Start () {
	rigidbody.AddForce(FirstForce);
}

function Update () {
	if(transform.position.z < 0){
		Debug.Log("Game Over!!");
		Application.LoadLevel("Main");
	}
}

function OnCollisionEnter(obj : Collision){
	audio.Play();
	if(obj.gameObject.tag == "Block"){
		Destroy(obj.gameObject);
	}

	// バウンド時の加速度制御
	rigidbody.velocity = rigidbody.velocity.normalized * 10;
	if (Mathf.Abs(rigidbody.velocity.z) < 3) {
		rigidbody.velocity.z = rigidbody.velocity.z * 3;
	}
	if (Mathf.Abs(rigidbody.velocity.x) < 3) {
		rigidbody.velocity.x = rigidbody.velocity.x * 3;
	}
}
