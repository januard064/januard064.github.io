function validasi(){
	var Nim = document.getElementById("nim").value;
	var Nama = document.getElementById("nama").value;

	if((Nim == "") && (Nama == "")){
		alert("Nama dan Nim harus diisi")
		return(false);
	}

	if(nim != "(?=^.{7,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z]).*$"){
		alert("NIM harus terdiri dari 7 karakter dan kombinasi angka dan huruf")
		return(false);
	}
}