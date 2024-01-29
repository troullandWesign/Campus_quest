// components/Quest/Quest.js
class Quest {
    constructor(title, slug, description, qrcode, thumbnail, achieve) {
      this.title = title;
      this.slug = slug
      this.description = description;
      this.qrCode = qrcode;
      this.thumbnail = thumbnail;
      this.achieve = achieve
    }
    toString() {
      return `${this.title}: ${this.slug}: ${this.description}: ${this.qrCode}: ${this.thumbnail} : ${this.achieve}`;
    }
  }
  
export default Quest;
  