import '../../css/SignIn.css'
import 'font-awesome/css/font-awesome.min.css';

const SignIn = () => {
    function toggleForms() {
        document.getElementById('signup-form').classList.toggle('hidden');
        document.getElementById('login-form').classList.toggle('hidden');
      }
  
      function togglePassword(fieldId, icon) {
        const field = document.getElementById(fieldId);
        if (field.type === 'password') {
          field.type = 'text';
          icon.classList.remove('fa-eye');
          icon.classList.add('fa-eye-slash');
        } else {
          field.type = 'password';
          icon.classList.remove('fa-eye-slash');
          icon.classList.add('fa-eye');
        }
      }
    return (
            <div className="signIn-container">
                <div className="image-section">
                    <video muted autoPlay loop>
                        <source src='/references/login.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className="form-section hidden" id="signup-form">
                <h1>Sign Up</h1>
                <p>Joy Code Me의 Content 를 즐기고 싶다면 로그인하세요.</p>
                <form id="signupForm">
                    <div className="form-group">
                    <input type="text" id="id" required placeholder=" "/>
                    <label htmlFor="id">ID</label>
                    </div>
                    <div className="form-group">
                    <input type="password" id="signup_password" required placeholder=" "/>
                    <label htmlFor="signup_password">Password</label>
                    <i className="fa fa-eye show-hide" onClick={(e) => togglePassword('signup_password', e.currentTarget)}></i>
                    </div>
                    <div className="form-group">
                    <input type="password" id="cpass" required placeholder=" "/>
                    <label htmlFor="cpass">Confirm Password</label>
                    </div>
                    <div className="form-group">
                    <input type="text" id="name" required placeholder=" "/>
                    <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-group">
                    <input type="email" id="email" required placeholder=" "/>
                    <label htmlFor="email">Email</label>
                    </div>
                    <button type="submit" className="form-btn">Sign Up</button>
                </form>
                <div className="toggle-link" onClick={toggleForms}>I am already a member</div>
                </div>

                <div className="form-section" id="login-form">
                <h1>Sign In</h1>
                <p>Welcome Back!</p>
                <form id="loginForm">
                    <div className="form-group">
                    <input type="email" id="login_email" required placeholder=" "/>
                    <label htmlFor="login_email">ID</label>
                    </div>
                    <div className="form-group">
                    <input type="password" id="login_password" required placeholder=" "/>
                    <label htmlFor="login_password">Password</label>
                    {/* <!-- Font Awesome 눈 아이콘 적용 클래스 --> */}
                    <i className="fa fa-eye show-hide" onClick={(e) => togglePassword('login_password', e.currentTarget)}></i>
                    </div>
                    <button type="submit" className="form-btn">Sign In</button>
                </form>
                <div className="toggle-link" onClick={toggleForms}>Create an account?</div>
                </div>
            </div>
    )
}
export default SignIn;