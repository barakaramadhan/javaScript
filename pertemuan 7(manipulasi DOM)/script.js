let getElement = document.getElementById("contohElement");
      console.log(getElement.innerText); //untuk melihat isi
      console.dir(getElement); //untuk melihat properti elemant
      getElement.innerText = "Sekolah Tahfizh Bogor"; //yang sudah di update

      //MEMBUAT ELEMENT BARU
      let h1Element = document.createElement("h1");

       //isi element baru
       h1Element.innerText = 'ini element baru';

      // sisipkan element baru
      document.getElementById('container').appendChild(h1Element);

      //VALUE PADA INPUT
      let inputElement =document.getElementById('age');
      console.dir(inputElement);

      function myFunction(){
        console.log(document.getElementById('age').value);
        
      }