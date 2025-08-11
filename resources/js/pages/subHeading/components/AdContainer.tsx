import React, { useEffect } from 'react';

const AdContainer = () => {
  useEffect(() => {
    // Instead of loading the blocked script, we simulate the ad insertion
    const container = document.getElementById('container-a8be7b0270fa57d86b88228a046adb65');
    if (container) {
      const mockAd = document.createElement('div');
      mockAd.style.width = '100%';
      mockAd.style.height = '100px';
      mockAd.style.backgroundColor = '#eee';
      mockAd.style.display = 'flex';
      mockAd.style.justifyContent = 'center';
      mockAd.style.alignItems = 'center';
      mockAd.style.color = '#333';
      mockAd.style.border = '1px solid #ccc';
      mockAd.textContent = 'Ad placeholder - external ad script blocked or unavailable.';
      container.appendChild(mockAd);
    }

    // Cleanup function to remove the mock ad
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="mt-5">
      {/* <img src="/assets/demo-images/note4.png" className="aspect-[21/4] w-full object-cover" alt="Description of the image" /> */}
      <div id="container-a8be7b0270fa57d86b88228a046adb65"></div>
    </div>
  );
};

export default AdContainer;
