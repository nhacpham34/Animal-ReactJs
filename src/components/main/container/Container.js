import './container.css'

import Animal from './Animal'
import AnimalList from './list_animal.json'
function Container() {
    return (
        <div className="grid wide container">
            <div className="grid">
                <h1 className="container__title">
                ĐỘNG VẬT HOANG DÃ
                </h1>
                <p className="container__description">
                    Việt Nam là một trong những quốc gia có đa dạng sinh học cao về các 
                    loài động thực vật với hơn 11.373 loài thực vật bậc cao có mạch, 2.393 loài thực vật bậc thấp, 337 loài và phân loài thú
                    (trong đó có 25 loài thú biển), 840 loài chim, 337 loài bò sát (trong đó có 15 loài rắn biển; 5 loài rùa biển),
                    167 loài lưỡng cư, trên 1.028 loài cá nước ngọt và khoảng 2.500 loài cá nước mặn.
                </p>      
                <p className="container__description">
                    Do tình trạng săn bắt, buôn bán trái pháp luật cũng như sự hủy hoại môi trường sống của 
                    các loài động vật, nhiều loài động vật hoang dã (ĐVHD) không còn được tìm thấy hoặc rất 
                    hiếm gặp tại Việt Nam. Những loài động vật hiện đang bị buôn bán phổ biến là một trong 
                    những nhóm mục tiêu mà WCS Chương trình Việt Nam đang nỗ lực bảo vệ thông qua các hoạt 
                    động phòng chống buôn bán trái pháp luật ĐVHD, bao gồm voi, tê tê, tê giác, hổ, rùa, 
                    linh trưởng.
                </p> 
                <p className="container__description text-italic">
                    <span>Nguồn: </span> 
                    Báo cáo quốc gia về đa dạng sinh học năm 2011. Bộ Tài nguyên và Môi trường, trang 3-4.
                </p>               
            </div>
            <div className="animal">
                <h1 className="animal__heading">Danh Sách Động vật</h1>
                <ul className="animal__list row">
                {AnimalList.map(animal => {
                    return(
                    <Animal key = {animal.id}  animal={animal} />
                )})} 
                </ul>
            </div>
        </div>
    );
}
export default Container;