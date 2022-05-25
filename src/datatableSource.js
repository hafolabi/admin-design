 export const userColumns = [
 { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field:'email',
    headerName:'Email',
    width:230,
  },
  {
    field:'age',
    headerName:'Age',
    width:100,
  },
  {
    field:'status',
    headerName:'Status',
    width:160,
    renderCell: (params) => {
      return(
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      )
    }
  },
]

//temporary data
export const userRows = [
    {
      id: 1,
      username: "Shade",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1test@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamiu Godwin",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2test@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Dipsol",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3test@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Balikis",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4test@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Temitope",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5test@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Moses",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6test@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7test@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8test@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Rose",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "test@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Mary",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "test@gmail.com",
      status: "active",
      age: 65,
    },
  ];

