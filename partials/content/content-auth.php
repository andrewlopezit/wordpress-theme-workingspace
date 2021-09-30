<div class="modal" id="auth-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body login-container">
                <h4 class="text-center">Log in <span>and explore co-working</span>space</h4>

                <div class="g-signin2" id="google-signin" data-onsuccess="onGoogleSignIn"></div>
                <p class="text-center text-muted separator">Or</p>

                <div class="error-message" id="auth-error-message"></div>

                <form class="auth-form" id="login-auth-form" method="post">
                    <div class="form-group">
                        <input type="text" class="form-control" id="user_username" name="username"  required minlength="5" />
                        <label class="form-group label" for="user_username">Username or email</label>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="user_password" name="password"  required />
                        <label class="form-group label" for="user_password">Password</label>
                        <i class="far fa-eye password"></i>
                    </div>

                    <div class="button-container">
                        <button class="btn login" disabled>Login</button>
                        <button class="btn create-account">Sign Up</button>
                    </div>
                </form>

                <small class="text-muted full-width">By completing, you accept the Coworker <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></small>
            </div>

            <div class="modal-body register-container">
                <form class="auth-form" id="register-auth-form" method="post">
                    <h4 class="text-center">Join the <span>Coworking</span> Community</h4>
                    <div class="error-message" id="register-error-message"></div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="user_firstname" name="first_name"  required minlength="3" />
                        <label class="form-group label" for="user_firstname">First name</label>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" id="user_lastname" name="last_name"  required minlength="3" />
                        <label class="form-group label" for="user_lastname">Last name</label>
                    </div>

                    <div class="form-group">
                        <input type="email" class="form-control" id="user_email" name="email"  required/>
                        <label class="form-group label" for="email">johndoe@email.com</label>
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" id="user_password" name="password"  required minlength="5" />
                        <label class="form-group label" for="user_password">Password</label>
                        <i class="far fa-eye password"></i>
                    </div>

                    <button class="btn create-account" disabled>Sign Up</button>
                </form>
                
                <small class="text-muted full-width">By completing, you accept the Coworker <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></small>
            </div>
        </div>
    </div>
</div>