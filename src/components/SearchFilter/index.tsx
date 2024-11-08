import { TextField } from '@mui/material';

interface SearchFilterProps {
  placeholder: string;
  value: string;
  onChange: (input: string) => void;
  helperText: string;
}

export default function SearchFilter({ placeholder, value, onChange, helperText }: SearchFilterProps) {
  return (
    <TextField
      label={placeholder}
      value={value}
      variant="outlined"
      helperText={helperText}
      onChange={(event) => onChange(event.currentTarget.value)}></TextField>
  );
}
