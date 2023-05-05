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
  const [selectedTag, setSelectedTag] = React.useState<string>();

  const handleTagClick = (location: IGeoJSON) => {
    handleSidebarClick(location);
    if (location.address === selectedTag) setSelectedTag(undefined);
    else setSelectedTag(location.address);
  };

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
                onClick={() => handleTagClick(location)}
              >
                {location.title}
                {location.address === selectedTag && (
                  <>
                    <hr className="TabDivider" />
                    <div className="TabAddress">{location.address}</div>
                  </>
                )}
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
