import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from "@angular/fire/compat/storage";
import { finalize } from "rxjs";

export class FileUploadFireBase {
    private filePath!: string;
    private checkType: boolean = true;
  
    public src!: string;
    public percentageChanges!: number;
    public url!: string;
  
    constructor(private file: File, private storage: AngularFireStorage) {
      this.filePath = `${this.file.type}/${this.file.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`
      this.srcRendder()
    }
  
    public up(): void {
      if (this.file && this.checkType) {
        const fileRef: AngularFireStorageReference = this.storage.ref(this.filePath);
        const task: AngularFireUploadTask = this.storage.upload(this.filePath, this.file);
        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.url = url
            });
          })
        ).subscribe()
        task.percentageChanges().subscribe(
          (per: number | undefined) => { if (per) this.percentageChanges = per }
        )
      }else{
        console.error("File null or not type need");
        
      }
    }
    /**
     * create a src simulator for file, cant use to display image on the img card
     * tạo đường dẫn src ảo cho file, dùng để hiển thị ảnh cho thẻ img mà không cần phải 
     * up trước lên sever để lấy đường dẫn
     */
    srcRendder() {
      if (this.file) {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string')
            this.src = reader.result
        }
        reader.readAsDataURL(this.file);
      }
    }
    /**
    check typeFile , input is typeFile array (ex: ['image/gif', 'image/jpeg', 'image/png'])
     kiểm tra kiểu dữ liệu, truyền vào là 1 mảng kiểu dữ liệu quy định
    (vi du checkTypes(['image/gif', 'image/jpeg', 'image/png']).up())
     nếu dữ liệu không khớp sẽ không upload file
    */
    public checkTypes(typeFiles: string[]): FileUploadFireBase {
      this.checkType = false
      for (let typeFile of typeFiles) {
        if (this.file.type === typeFile) {
          this.checkType = true
          console.log(this.file.type + ' = ' + typeFile);
        }
      }
      return this;
    }
  }