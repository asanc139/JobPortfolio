const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: 'none',
      fontSize: '29px',
      padding: '10px',
      transition: '0.2s ease-in',
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/asanc139"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Armando Sanchez' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/armando-sanchez-92b548229/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Armando Sanchez' LinkedIn Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
