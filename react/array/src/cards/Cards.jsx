import React from 'react';

function Cards() {
  const cards = [
    { id: 1, label: 'Bird 1' },
    { id: 2, label: 'Bird 2' },
    { id: 3, label: 'Bird 3' }
  ];

  return (
   <div>
    <center> <h4>CARDS</h4></center>
     <div style={styles.container}>
      {cards.map((card) => (
        <div key={card.id} style={styles.card}>
          <img
            src="https://th.bing.com/th/id/R.b8c889473285e327a4820975040c123a?rik=FgVEL9gVLkumRg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fBird-pics-free-download-wallpaper-HD.jpg&ehk=S8941pD0S5a%2bUfw7H6Skprp9HNj3dilSAnfP%2fXV7R7M%3d&risl=&pid=ImgRaw&r=0"
            alt={card.label}
            style={styles.image}
          />
          <p style={styles.label}>{card.label}</p>
        </div>
      ))}
    </div>
   </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    boxSizing: 'border-box'
  },
  card: {
    border: '2px solid red',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  label: {
    margin: '10px 0',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
};

export default Cards;
