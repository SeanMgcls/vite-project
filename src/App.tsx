import './App.css'

function Avatar() {  
  return (
    <img
      className="avatar"
    />
  );
}

function Box({ size = 's' }) {
  const boxStyle = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
  };

  return (
    <div className="box" style={boxStyle}>
      CPEITEL
    </div>
  );
}

export default function Profile() {
  return (
    <div className="main-container">
      <div className="profile-container">
        <h3>Sean Glenn Magcalas</h3>
        <Avatar/>
        <Box size={100}/>
      </div>
    </div>
  );
}