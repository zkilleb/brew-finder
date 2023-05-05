import './MapSidePanel.css';
import React from 'react';
import { IGeoJSON } from '../../interfaces/IGeoJson';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export function MapSidePanel({
  locations,
  handleSidebarClick,
}: {
  locations?: IGeoJSON[];
  handleSidebarClick: (location: IGeoJSON) => void;
}) {
  const [visible, setVisible] = React.useState(true);

  const handleCollapse = () => {
    setVisible(!visible);
  };

  return visible ? (
    <div className="MapSidePanel">
      <div className="IconWrapper">
        Locations
        <ChevronRight className="ChevronIcon" onClick={handleCollapse} />
      </div>
      {locations && locations.length > 0
        ? locations.map((location) => {
            return (
              <div
                key={location.address}
                className="LocationTile"
                onClick={() => handleSidebarClick(location)}
              >
                {location.title}
              </div>
            );
          })
        : 'Please enter a ZIP code'}
    </div>
  ) : (
    <div className="MapSidePanelCollapsed">
      <div className="IconWrapper">
        <ChevronLeft className="ChevronIcon" onClick={handleCollapse} />
      </div>
    </div>
  );
}
