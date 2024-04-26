import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Button } from "@mui/material"
import { FormControl, InputLabel, MenuItem, Select, Checkbox, ListItemText, OutlinedInput, SelectChangeEvent } from "@mui/material";
import Layout from "@components/layout"
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}



const IndexPage: React.FC<PageProps> = (props) => {
  // const params = new URLSearchParams(location.search);
  // const parameter1 = params.get("foo");
  // const parameter2 = params.get("bar");
  console.log(props)
  // console.log(parameter1, parameter2);
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button variant="contained">MUI Button</Button>
      <MultipleSelectCheckmarks />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
