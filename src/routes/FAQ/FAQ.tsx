import './FAQ.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export function FAQ() {
  return (
    <div className="AccordionWrapper">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Can my subscription be cancelled at anytime?
        </AccordionSummary>
        <AccordionDetails>
          Yes, your subscription can be cancelled at anytime. Once cancelled,
          your subscription will last until the next renewal date and then you
          will be charged no further. If you choose to rejoin again, your
          general information will be saved to streamline the process.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
