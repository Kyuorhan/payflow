import 'package:flutter/material.dart';
import 'package:payflow/src/modules/home/home_page.dart';
import 'package:payflow/src/modules/login/login_page.dart';

class AuthController {
  var _isAutheticated = false;
  var _user;

  get user => _user;

  void setUser(BuildContext context, var user) {
    if (user != null) {
      _isAutheticated = true;
      _user = user;
      Navigator.pushReplacementNamed(context, "/home");
    } else {
      _isAutheticated = false;
      Navigator.pushReplacementNamed(context, "/login");
    }
  }
}
