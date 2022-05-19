function Detail () {
  return(
      <div className="grid wide">
          <img src={localStorage.getItem("linkToken")} alt={localStorage.getItem("nameAnimalToken")} className="slide__image"></img>

          <div className="grid">
                <h1 className="container__title">
                {localStorage.getItem("nameAnimalToken")}
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
                <p className="container__description" style={{fontWeight: 600}}>Các mối đe dọa</p>

                <p className="container__description"> 
                    Săn bắt và mất môi trường sống là hai trong số các nguyên nhân chính dẫn đến sự suy giảm số lượng cá thể của các loài
                    rùa cạn và rùa nước ngọt, bao gồm cả Giải sin-hoe. Các loài rùa cạn và rùa nước ngọt bị săn bắt chủ yếu để kinh doanh
                    thịt thú rừng, sử dụng là nguyên liệu trong y học cổ truyền và buôn bán thú cảnh.
                </p>

                <p className="container__description" style={{fontWeight: 600}}>Chúng tôi đang làm gì?</p>

                <p className="container__description"> 
                WCS Việt Nam làm việc với các cơ quan của chính phủ Việt Nam, hỗ trợ xây dựng năng lực và cung 
                cấp thông tin về chính sách nhằm nâng cao hiệu quả giám sát các hoạt động buôn bán động vật hoang
                 dã trái pháp luật. Chúng tôi nghiên cứu về các đường dây buôn bán, các địa điểm buôn bán/chế 
                 biến động vật hoang dã trái pháp luật, và chia sẻ với các cơ quan thực thi pháp luật để điều tra 
                 và ngăn chặn.
                </p>

                <p className="container__description"> 
                Đồng thời, chúng tôi cũng tiến hành nghiên cứu, giám sát dịch bệnh trên động vật hoang dã; 
                khả năng lây truyền bệnh giữa người và động vật hoang dã.
                Chúng tôi phối hợp chặt chẽ với các cơ quan thực thi pháp luật ở cả cấp trung ương và địa
                 phương, trong đó có cảnh sát và kiểm lâm, cũng như hỗ trợ kỹ thuật như cung cấp thông tin,
                  kỹ năng giám định loài, tư vấn về pháp luật nhằm mục tiêu triệt phá các mạng lưới tội phạm
                   lớn.
                </p>

                <p className="container__description text-italic"> Nguồn: </p>
                <p className="container__description text-italic"> 
                    Turtle Conservation Coalition [Rhodin, A.G.J., Walde, A.D., Horne, B.D., van Dijk, P.P., Blanck, T., 
                    and Hudson, R. (Eds.)]. 2011. Turtles in Trouble: The World’s 25+ Most Endangered Tortoises and
                     Freshwater Turtles—2011. Lunenburg, MA: IUCN/SSC Tortoise and Freshwater Turtle Specialist Group,
                      Turtle Conservation Fund, Turtle Survival Alliance, Turtle Conservancy, Chelonian Research Foundation,
                       Conservation International, Wildlife Conservation Society, and San Diego Zoo Global, 54 pp.
                </p> 
                <p className="container__description text-italic">
                    McCormack, T., Stuart, B. & Blanck, T. 2016. Cuora picturata. (errata version published in 2017)
                    The IUCN Red List of Threatened Species 2016: e.T163463A115303820. www.iucnredlist.org. Downloaded 
                    on 12 July 2017.
                 </p> 
                 <p className="container__description text-italic">
                 Asian Turtle Trade Working Group. 2000. Mauremys annamensis. (errata version published in 2016)
                  The IUCN Red List of Threatened Species 2000: e.T12876A97370458. www.iucnredlist.org. Downloaded
                   on 12 July 2017.
                 </p>              
            </div>
      </div>
  );
}
export default Detail;