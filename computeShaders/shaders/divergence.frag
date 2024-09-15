#include "glsl_includes"

out vec4 fragColor;
void main()
{
    //Left pixel
    float L = texture(sTD2DInputs[0], pL).x;
    //Right
    float R = texture(sTD2DInputs[0], pR).x;
    //Top
    float T = texture(sTD2DInputs[0], pT).y;
    //Bottom
    float B = texture(sTD2DInputs[0], pB).y;
    //Center
    vec2 C = texture(sTD2DInputs[0], vUV.xy).xy;

    if (pL.x < 0.0) {L = -C.x; }
    if (pR.x > 1.0) {R = -C.x; }
    if (pB.y < 0.0) {L = -C.y; } 
    if (pT.y > 1.0) {R = -C.y; } 
    
    float divergence = 0.5 * (R - L + T - B);

    float curl = R - L - T + B;
	vec4 color = vec4(divergence, 0.0, 0.0, 1.0);
	fragColor = TDOutputSwizzle(color);
}
