import '../css/FormComponent.css'
const FromComponent = () =>{
    return(
      <div className="container">
        <form className="form">
          <h2>ลงทะเบียน</h2>
            <div className="form-control">
              <label>ชื่อผู้ใช้</label>
              <input type="text"/>
              <small>error message</small>
            </div>
            <div className="form-control">
              <label>อีเมล</label>
              <input type="text"/>
              <small>error message</small>
            </div>
            <div className="form-control">
              <label>รหัสผ่าน</label>
              <input type="text"/>
              <small>error message</small>
            </div>
            <div className="form-control">
              <label>ยืนยันรหัสผ่าน</label>
              <input type="text"/>
              <small>error message</small>
            </div>
            <button type="submit">ลงทะเบียน</button>
        </form>
      </div>
    )

}
export default FromComponent