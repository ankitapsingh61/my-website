body {
  margin: 0;
  font-family: Arial;
  background: black;
  color: white;
}

/* NAVBAR */
nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

nav a {
  margin-left: 15px;
  color: white;
  text-decoration: none;
}

/* HERO */
.hero {
  height: 90vh;
  background: url('https://picsum.photos/1600/900') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero h2 {
  font-size: 40px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.item {
  position: relative;
}

.item img {
  width: 100%;
  transition: transform 0.4s ease;
}

.item:hover img {
  transform: scale(1.05);
}

.item p {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 20px;
}
