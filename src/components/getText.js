// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const texts = [
         

        `The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed eleifend, urna eget gravida fermentum, libero nunc varius neque, in efficitur tortor turpis eu dolor. 
         Phasellus malesuada nulla non metus volutpat tincidunt. Vivamus consequat metus sed leo condimentum dignissim. 
         Fusce eu purus et massa consequat lobortis. Ut rutrum ex vel nisl aliquet, et feugiat ligula tristique. 
         Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
         Proin vel nunc sed mauris pellentesque interdum vel vitae urna. Praesent finibus dignissim enim, 
         vitae vestibulum justo. Mauris tempus leo nec diam pharetra, ut rhoncus lectus sagittis.
          Nullam blandit malesuada leo a laoreet. Nam non dolor vel ante varius fermentum. `
        
      
    ];
  
    return texts[Math.floor(Math.random() * texts.length)];
  };