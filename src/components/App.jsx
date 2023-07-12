export const App = () => {
  return (
    <div
      class="profile"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
      }}
    >
      <div
        class="description"
        style={{
          height: '20vh',
          padding: '10px',
          backgroundColor: 'blue',
          borderRadius: '180px',
        }}
      >
        <img
          style={{
            height: '20vh',
            padding: '10px',
            backgroundColor: 'blue',
            borderRadius: '180px',
          }}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          class="avatar"
        />
        <p class="name">Petra Marica</p>
        <p class="tag">@pmarica</p>
        <p class="location">Salvador, Brasil</p>
      </div>

      <ul
        class="stats"
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '350px',
          listStyle: 'none',
          backgroundColor: '#D3D3D3',
          borderRadius: '23px',
        }}
      >
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginLeft: '0px',
          }}
        >
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginLeft: '30px',
          }}
        >
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginLeft: '30px',
            paddingRight: '35px',
          }}
        >
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};
