import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import './Videos.css'
import favimg from "../assets/favicon.png"
import vimg1 from "../assets/img-1.jpg"
import vimg2 from "../assets/img-2.jpg"
import vimg3 from "../assets/img-3.jpg"
import vimg4 from "../assets/img-4.jpg"
import vimg5 from "../assets/img-5.jpg"
import vimg6 from "../assets/img-6.jpg"
import vimg7 from "../assets/img-7.jpg"
import vimg8 from "../assets/img-8.jpg"
import vimg9 from "../assets/img-9.jpg"
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';


const { Meta } = Card;
const Videos = () => (
  <div className="videos-container">
    <div className="heading">
      <h4>اقراء ویڈیوز</h4>
    </div>
  <div className="card-container">
    <div className="card-section">
   <div className="card-div">
   <a href='https://www.youtube.com/watch?v=fGj4kUZVA-Q' target="_blank">
   <Card
    style={{
      width: 400,
      }}
    cover={
      <img
        alt="example"
        src={vimg1}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta 
      avatar={<Avatar src={favimg} />}
      title="تقریب-تقسیم-نشان-اقرا--حیدرا-باد-22-جنوری-2023" 
      description="This is the description"
    />
 </Card>
   </a>
   </div>


   <div className="card-div">
   <a href='https://www.youtube.com/watch?v=QPThmtwthns&t=25s' target="_blank"><Card
    style={{
      width: 400,
      
    }}
    cover={
      <img
        alt="example"
        src={vimg2}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta 
      avatar={<Avatar src={favimg} />}
      title="شعبہ روضہ اور شعبہ قاعدہ کے داخلوں کی ترتیب کراچی زون1"
      description="This is the description"
    />
</Card></a>
   </div>

   <div className="card-div">
   <Card
   style={{
    width: 400,
  }}
    
    cover={
      <img
        alt="example"
        src={vimg3}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta
      avatar={<Avatar src={favimg} />}
      title="شعبہ روضہ و شعبہ قاعدہ میں بچوں کا پہلا دن"
      description="This is the description"
    />

</Card>
   </div>



  </div>
  <div className="card-section">
   <div className="card-div">
   <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src={vimg4}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta
      avatar={<Avatar src={favimg} />}
      title="شعبہ روضہ کراچی زون کے نتائج کا اعلان"
      description="This is the description"
    />
 </Card>
   </div>


   <div className="card-div">
   <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src={vimg5}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta
      avatar={<Avatar src={favimg} />}
      title="ستمبر7 یوم تحفظ ختم نبوت"
      description="This is the description"
    />
</Card>
   </div>

   <div className="card-div">
   <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src={vimg6}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta
      avatar={<Avatar src={favimg} />}
      title="دعا اقبال"
      description="This is the description"
    />

</Card>
   </div>



  </div>
   <div className="card-section">
   <div className="card-div">
   <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src={vimg7}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta
      avatar={<Avatar src={favimg} />}
      title="نصاب شعبہ روضہ"
      description="This is the description"
    />
 </Card>
   </div>


   <div className="card-div">
   <a href='https://www.youtube.com/watch?v=muOJEJ547Yw'><Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src={vimg8}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta
      avatar={<Avatar src={favimg} />}
      title="برانچوں کی وضاحت"
      description="This is the description"
    />
</Card></a>
   </div>

   <div className="card-div">
   <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src={vimg9}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
 <Meta
      avatar={<Avatar src={favimg} />}
      title="تقریب تقسیم نشان اقرأ کوئٹہ2023"
      description="This is the description"
    />

</Card>
   </div>



  </div>
  </div>
  </div>
  
  
);
export default Videos;