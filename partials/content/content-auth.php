<div class="modal" id="auth-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <button class="btn google">
                    <i class="fab fa-google"></i>
                    <span>Sign in with google</span>
                </button>
                <p class="text-center text-muted separator">Or</p>

                <div class="error-message" id="auth-error-message">
                </div>

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
                        <button class="btn create-account">Create Account</button>
                    </div>
                </form>

                <small class="text-muted full-width">By completing, you accept the Coworker <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></small>
            </div>
        </div>
    </div>
</div>