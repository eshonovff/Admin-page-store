import { Button, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useState } from "react";
const Orders = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="w-[1500px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[900] text-[] text-[32px] my-10">Orders</h1>
        <Button variant="contained">+ Add Order</Button>
      </div>

      <div className="my-10 flex items-center px-[10%] justify-between">
        <TextField
          type="search"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

        <BorderColorOutlinedIcon
          sx={{
            color: "#2fa1ff",
            border: "1px solid #2fa1ff",
            padding: "5px",
            borderRadius: "5px",
          }}
          fontSize="large"
        />
        <DeleteOutlineOutlinedIcon
          sx={{
            color: "#2fa1ff",
            border: "1px solid #2fa1ff",
            padding: "5px",
            borderRadius: "5px",
          }}
          fontSize="large"
        />
      </div>


      <table className="w-full">
        <thead >
          <tr className="border-b-2 text-left">
            <th>
              <input type="checkbox" /> Order
            </th>
            <th>Date</th>
            <th>Customer</th>
            <th>Payment status</th>
            <th>Order Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
