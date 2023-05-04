import Swal from "sweetalert2";

export const environment = {
  host : "http://emojiapi.antliaespacelab.com",
  // host : "http://localhost:1001",
  emojiJson : "{\n" +
    "            \"title\": \"New title\",\n" +
    "            \"credit\": \"Credit\",\n" +
    "            \"linkVideo\": \"Video Link\",\n" +
    "            \"stt\": 10,\n" +
    "            \"level\": \"Input level\",\n" +
                  '"create" : true' +
    "        }",
  emoji :  ["U+1F602", "U+1F600", "U+1F609", "U+1F606", "U+1F605", "U+1F608", "U+1F607", "U+1F60D", "U+1F431", "U+1F439", "U+1F438", "U+1F434", "U+1F43D", "U+1F623", "U+1F989", "U+1F468", "U+1F628", "U+1F627", "U+1f9b9", "U+1F629", "U+1F62D", "U+1F62C", "U+1F62F", "U+1F62E", "U+1F46E", "U+1F62A", "U+1F98D", "U+1F970", "U+1F60F", "U+1F60E", "U+1F976", "U+1F975", "U+1F612", "U+1F615", "U+1F614", "U+1F971", "U+1F611", "U+1F974", "U+1F57A", "U+1F617", "U+1F619", "U+1F618", "U+1F61C", "U+1F61D", "U+1F97A", "U+1F483", "U+1F485", "U+1F480", "U+1F921", "U+1F923", "U+1F648", "U+1F922", "U+1F642", "U+1F928", "U+1F925", "U+1F924", "U+1F927", "U+1F92A", "U+1F40D", "U+1F92C", "U+1F92B", "U+1F475", "U+1F474", "U+1F635", "U+1F634", "U+1F912", "U+1F911", "U+1F631", "U+1F633", "U+1F632", "U+1F914", "U+1F913", "U+1F99F", "U+1F385", "U+1F9DB", "U+1F9DA", "U+1F42E", "U+1F42D", "U+1F42C", "U+1F92E", "U+1F92D", "U+1F92F", "U+1F414", "U+1F936", "U+1F41D"],
  emojiDataJson : `{
            "unicode1": "U+1F92D",
            "unicode2": "U+1F92D",
            "unicode3": "U+1F92D",
            "unicode4": "U+1F92D",
            "unicode5": "U+1F92D",
            "text": "New Data Emoji",
            "create": true
            }`,
  sound2Json : `{
            "name": "New",
            "thumb": "http://static.ybox.vn/2022/11/2/1669719100173-origin_165208772679274home.jpg",
            "sound": "http://45.79.26.172/twdata/sound2/ID3.mp3",
            "create": true
        }`,
}

export const logo = "export const logo"

export function successAlert(string : string){
  Swal.fire({
    icon: 'success',
    title: string,
    showConfirmButton: false,
    timer: 1500
  })
}
export function errorAlert(string : string){
  Swal.fire({
    icon: 'error',
    title: string,
    showConfirmButton: false,
  })
}

export function deleteAlert(action : any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      action()
    }
  })
}


