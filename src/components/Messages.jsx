import './Messages.css'

const Messages = () => {
  return (
    <section className="messages">
      <div id="messages">
        <div className="message">
          <p className="details">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde esse nemo suscipit, tempora rerum officiis consequuntur quas odit placeat saepe nostrum quasi deserunt cum veniam vero soluta voluptatum. Nihil, nostrum!</p>
          <p className="sender">Sollyverse</p>
          <p className="date">20-02-2023</p>
        </div>
        <div className="message">
          <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et deleniti repudiandae id officia ipsum distinctio iste quod, corporis non assumenda voluptatum rerum atque quae debitis?</p>
          <p className="sender">Sollyverse</p>
          <p className="date">17-02-2023</p>
        </div>
        <div className="message">
          <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut architecto deserunt omnis officiis, possimus dolorum. Voluptate voluptatem exercitationem dignissimos enim at eum iure, impedit non, debitis corporis deleniti animi!</p>
          <p className="sender">Sollyverse</p>
          <p className="date">10-02-2023</p>
        </div>
        <div className="message">
          <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste cumque delectus doloremque perspiciatis consequatur!</p>
          <p className="sender">Sollyverse</p>
          <p className="date">06-02-2023</p>
        </div>
      </div>
      <div className="messagePopup"></div>
    </section>
  )
}

export default Messages;
