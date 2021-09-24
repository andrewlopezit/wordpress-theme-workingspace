<div class="modal is-display" id="auth-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <button class="btn google">
                    <i class="fab fa-google"></i>
                    <span>Sign in with google</span>
                </button>
                <p class="text-center text-muted separator">Or</p>
                <form class="autho-form" id="login-auth-form">
                    <div class="form-group">
                        <input type="text" class="form-control" id="user_username" name="user_username"  required />
                        <label class="form-group label" for="user_username">Username or email</label>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="user_password" name="user_password"  required />
                        <label class="form-group label" for="user_password">Password</label>
                        <i class="far fa-eye password"></i>
                    </div>

                    <div class="button-container">
                        <button class="btn login">Login</button>
                        <button class="btn create-account">Create Account</button>
                    </div>
                </form>

                <small class="text-muted full-width">By completing, you accept the Coworker <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></small>
            </div>
        </div>
    </div>
</div>