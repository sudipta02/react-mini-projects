export function SimpleForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      date: formData.get('date'),
      age: formData.get('age'),
      country: formData.get('country'),
      plan: formData.get('plan'),
      subscribe: formData.get('subscribe') === 'on',
      hobbies: formData.getAll('hobbies'),
      message: formData.get('message')
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" /><br />
      <input type="email" name="email" placeholder="Email" /><br />
      <input type="date" name="date" /><br />
      <input type="number" name="age" placeholder="Age" /><br />
      
      <select name="country">
        <option value="">Country...</option>
        <option value="us">USA</option>
        <option value="uk">UK</option>
      </select><br />
      
      <label>
        <input type="radio" name="plan" value="free" /> Free
      </label>
      <label>
        <input type="radio" name="plan" value="pro" /> Pro
      </label><br />
      
      <label>
        <input type="checkbox" name="subscribe" /> Subscribe
      </label><br />
      
      <label>
        <input type="checkbox" name="hobbies" value="sports" /> Sports
      </label>
      <label>
        <input type="checkbox" name="hobbies" value="music" /> Music
      </label><br />
      
      <textarea name="message" placeholder="Message" /><br />
      
      <button type="submit">Send</button>
    </form>
  );
}