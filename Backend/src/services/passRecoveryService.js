const PassRecovery = require('../utils/passRecovery');

class PassRecoveryService {
    async sendRecoveryEmail(email, host) {
        return await PassRecovery.sendRecoveryEmail(email, host);
    }

    async resetPassword(token, newPassword) {
        return await PassRecovery.resetPassword(token, newPassword);
    }
}

module.exports = PassRecoveryService;
