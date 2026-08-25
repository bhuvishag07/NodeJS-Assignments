const fs = require('fs');

// Task 1
fs.writeFile('student.txt', `Name: Bhuvisha Gohil
Course: Full Stack Development
Technology: Node.js`, (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File created successfully');

  // Task 2
  fs.readFile('student.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);

    // Task 3
    fs.appendFile('student.txt', '\nExperience: 1 Year\nCity: Kolkata', (err) => {
      if (err) {
        console.error('Error updating file:', err);
        return;
      }
      console.log('Data updated successfully');

      // Task 4
      fs.rename('student.txt', 'studentDetails.txt', (err) => {
        if (err) {
          console.error('Error renaming file:', err);
          return;
        }
        console.log('File renamed successfully');

        // Task 5
        fs.unlink('studentDetails.txt', (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return;
          }
          console.log('File deleted successfully');
        });
      });
    });
  });
});