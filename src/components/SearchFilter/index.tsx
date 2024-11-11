import { TextField } from '@mui/material';
import { motion } from 'framer-motion';

interface SearchFilterProps {
  placeholder: string;
  value: string;
  onChange: (input: string) => void;
  helperText: string;
}

export default function SearchFilter({ placeholder, value, onChange, helperText }: SearchFilterProps) {
  return (
    <motion.div
      transition={{ ease: 'easeOut', duration: 0.4 }}
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}>
      <TextField
        component={motion.div}
        label={placeholder}
        value={value}
        variant="outlined"
        helperText={helperText}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </motion.div>
  );
}
