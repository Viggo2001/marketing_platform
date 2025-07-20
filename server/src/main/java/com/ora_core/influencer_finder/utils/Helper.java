package com.ora_core.influencer_finder.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Helper {
    
    public static boolean isEmail(String emailInput) {
        Pattern pattern = Pattern.compile("^\\S+@\\S+\\.\\S+$");
        Matcher matcher = pattern.matcher(emailInput);

        return matcher.matches();
    }

    public static boolean isPassword(String passwordInput) {
        Pattern pattern = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
        Matcher matcher = pattern.matcher(passwordInput);

        return matcher.matches();
    }

    public static boolean isUrl(String urlInput) {
        Pattern pattern = Pattern.compile("^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]");
        Matcher matcher = pattern.matcher(urlInput);

        return matcher.matches();
    }

}
