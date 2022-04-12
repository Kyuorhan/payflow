import 'package:flutter/material.dart';
import 'package:payflow/shared/widgets/button/standard_button.dart';
import 'package:payflow/shared/widgets/divider/divide_vertical.dart';

class SetBarcodeScannerButtons extends StatelessWidget {
  final String primaryLabel;
  final VoidCallback primaryOnPressed;
  final String secondaryLabel;
  final VoidCallback secondaryOnPressed;
  const SetBarcodeScannerButtons({
    Key? key,
    required this.primaryLabel,
    required this.primaryOnPressed,
    required this.secondaryLabel,
    required this.secondaryOnPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 56,
      child: Row(
        children: [
          Expanded(
            child: StandardButton(
                label: primaryLabel, onPressed: primaryOnPressed),
          ),
          const DividerVertical(),
          Expanded(
            child: StandardButton(
                label: secondaryLabel, onPressed: secondaryOnPressed),
          ),
        ],
      ),
    );
  }
}
