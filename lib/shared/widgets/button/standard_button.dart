import 'package:flutter/material.dart';
import 'package:payflow/shared/themes/app_text_style.dart';

class StandardButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;
  const StandardButton({
    Key? key,
    required this.label,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 56,
      child: TextButton(
        onPressed: onPressed,
        child: Text(
          label,
          style: TextStyles.buttonBoldHeading,
        ),
      ),
    );
  }
}
