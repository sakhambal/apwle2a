const Map = () => {
    return (
      <div className="overflow-hidden w-full h-full rounded-2xl">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1219.0372945794604!2d72.82331682681148!3d18.950168313214018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1785400632269!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  };
  
  export default Map;